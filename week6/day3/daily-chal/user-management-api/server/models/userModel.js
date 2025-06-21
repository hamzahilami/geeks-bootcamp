const pool = require('../config/db');

const createUserWithPassword = async (userData, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userInsertText = `INSERT INTO users(email, username, first_name, last_name)
                            VALUES ($1, $2, $3, $4) RETURNING *`;
    const userRes = await client.query(userInsertText, [
      userData.email,
      userData.username,
      userData.first_name,
      userData.last_name,
    ]);

    const hashInsertText = `INSERT INTO hashpwd(username, password)
                            VALUES ($1, $2)`;
    await client.query(hashInsertText, [userData.username, hashedPassword]);

    await client.query('COMMIT');
    return userRes.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

const getUserByUsername = async (username) => {
  const res = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return res.rows[0];
};

const getPasswordHashByUsername = async (username) => {
  const res = await pool.query('SELECT password FROM hashpwd WHERE username = $1', [username]);
  return res.rows[0]?.password;
};

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users ORDER BY id ASC');
  return res.rows;
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

const updateUserById = async (id, userData) => {
  const text = `UPDATE users SET email=$1, username=$2, first_name=$3, last_name=$4 WHERE id=$5 RETURNING *`;
  const values = [userData.email, userData.username, userData.first_name, userData.last_name, id];
  const res = await pool.query(text, values);
  return res.rows[0];
};

module.exports = {
  createUserWithPassword,
  getUserByUsername,
  getPasswordHashByUsername,
  getAllUsers,
  getUserById,
  updateUserById,
};
