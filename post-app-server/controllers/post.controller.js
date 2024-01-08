const pool = require('../db');

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await pool.query('SELECT * FROM posts ORDER BY id');

      res.status(200).json(posts.rows);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);

      res.status(200).json(post.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createPost(req, res) {
    try {
      const { title, author, content } = req.body;
      const date = new Date();

      const newPost = await pool.query(
        `INSERT INTO posts (title, content, author, date) values ($1, $2, $3, $4) RETURNING *`,
        [title, content, author, date]
      );

      res.status(200).json(newPost.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updatePost(req, res) {
    try {
      const { id, title, author, content } = req.body;
      const currentPost = (await pool.query('SELECT * FROM posts WHERE id = $1', [id])).rows[0];
      console.log(currentPost);

      // if (!title && !author && !content) res.status(500).json({ message: 'Internal server error' });

      if (title) currentPost.title = title;
      if (author) currentPost.author = author;
      if (content) currentPost.content = content;

      const post = await pool.query(
        `UPDATE posts SET title = $1, author = $2, content = $3 WHERE id = $4 RETURNING *`,
        [currentPost.title, currentPost.author, currentPost.content, id]
      );

      res.status(200).json(post.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

      if (post.rowCount === 0) res.status(404).json({ message: 'Post not found' });
      else res.status(200).json(post.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new PostController();
