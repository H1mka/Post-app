const Router = require('express');
const router = new Router();
const postController = require('../controllers/post.controller');

router.get('/post', postController.getPosts);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.createPost);
router.patch('/post', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
