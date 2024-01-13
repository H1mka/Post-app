const pool = require('../db');

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await pool.query('SELECT * FROM posts ORDER BY id');
      const sortedPosts = posts.rows.sort((a, b) => b.date.localeCompare(a.date));

      res.status(200).json(sortedPosts);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getUserPosts(req, res) {
    try {
      const { id: user_id } = req.user;

      const posts = await pool.query('SELECT * FROM posts WHERE user_id = $1', [user_id]);
      const sortedPosts = posts.rows.sort((a, b) => b.date.localeCompare(a.date));

      res.status(200).json(sortedPosts);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getPostById(req, res) {
    try {
      const { id: post_id } = req.params;
      const { id: user_id } = req.user;
      const post = await pool.query('SELECT * FROM posts WHERE id = $1', [post_id]);

      if (post.rows[0].user_id === user_id) return res.status(200).json(post.rows[0]);

      res.status(200).json({ message: 'Wrong user' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createPost(req, res) {
    try {
      const { title, author, content, user_id } = req.body;
      const date = new Date();

      const newPost = await pool.query(
        `INSERT INTO posts (title, content, author, date, user_id) values ($1, $2, $3, $4, $5) RETURNING *`,
        [title, content, author, date, user_id]
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
