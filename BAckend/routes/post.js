import express from 'express';
import Post from '../models/Post.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a post (admin only)
router.post('/create', protect, admin, async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({ title, content, author: req.user._id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error in creating post' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Get a post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' });
  }
});


// Export router using ES module syntax
export default router;
