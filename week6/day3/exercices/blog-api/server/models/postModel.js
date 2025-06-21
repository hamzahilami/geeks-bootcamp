const db = require('../config/db');

const getAllPosts = async () => {
  const res = await db.query('SELECT * FROM posts ORDER BY id ASC');
  return res.rows;
};

const getPostById = async (id) => {
  const res = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return res.rows[0];
};

const createPost = async (title, content) => {
  const res = await db.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return res.rows[0];
};

const updatePost = async (id, title, content) => {
  const res = await db.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return res.rows[0];
};

const deletePost = async (id) => {
  await db.query('DELETE FROM posts WHERE id = $1', [id]);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
