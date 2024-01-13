const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const generateAccessToken = (id, login, first_name, last_name, created_date) => {
  const payload = {
    id,
    login,
    first_name,
    last_name,
    created_date,
  };

  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class AuthController {
  async isUserCreated(user_login) {
    try {
      if (!user_login) return;

      const user = await pool.query(`SELECT * FROM users WHERE login = $1`, [user_login]);

      return !!user.rowCount; // true if created, false if not
    } catch (error) {
      console.log(error);
    }
  }

  registration = async (req, res) => {
    try {
      const { login, password, first_name, last_name } = req.body;
      const date = new Date();

      const isCreated = await this.isUserCreated(login);

      if (isCreated) {
        return res.status(500).json({ message: 'User with current login already created' });
      }

      const hashPassword = bcrypt.hashSync(password, 7);

      const user = await pool.query(
        `INSERT INTO users (login, password, first_name, last_name, created_date) values ($1, $2, $3, $4, $5) RETURNING *`,
        [login, hashPassword, first_name, last_name, date]
      );

      res.status(200).json(user.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await pool.query('SELECT * FROM users WHERE login = $1', [login]);

      if (!user.rows[0]) {
        return res.status(400).json({ message: 'User not found' });
      }

      const validPassword = bcrypt.compareSync(password, user.rows[0].password);

      if (!validPassword) {
        return res.status(400).json({ message: 'Bad password' });
      }

      const { id, first_name, last_name, created_date } = user.rows[0];
      const token = generateAccessToken(id, login, first_name, last_name, created_date);

      res
        .status(200)
        .json({
          token,
          message: 'success',
          user: { id, first_name, login, last_name, created_date },
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Login server error' });
    }
  }
}

module.exports = new AuthController();
