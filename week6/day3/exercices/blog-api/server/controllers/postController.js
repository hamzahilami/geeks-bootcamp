const Post = require('../models/postModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: 'Title and content are required' });

  try {
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: 'Title and content are required' });

  try {
    const updatedPost = await Post.updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.deletePost(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
