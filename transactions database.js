import mysql from ‘mysql2’

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'username',
  password: 'pass',
  database: 'transactions_app'
}).promise()

async function getTransactions() {
  const [rows] = await pool.query("SELECT * FROM transactions")
  return rows 
}

async function getTransaction(id) {
  const [rows] = await pool.query(`
  SELECT *
  FROM transactions
  WHERE id = ?    
  `, [id])
  return rows[0]
}

async function createTransaction(title, content) {
  const result = await pool.query(`
  INSERT INTO transactions (title, contents)
  VALUES (?, ?)
  `, [title, content])
  const id = result.insertId
  return getTransaction(id)
}


