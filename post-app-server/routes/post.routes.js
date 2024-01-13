const Router = require('express');
const router = new Router();
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/post', postController.getPosts);
router.get('/post/userPosts/:user_id', authMiddleware, postController.getUserPosts);
router.get('/post/:id', authMiddleware, postController.getPostById);
router.post('/post', postController.createPost);
router.patch('/post', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
