require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // адрес вашего фронтенда
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // если используете куки или авторизацию
}));

app.use(express.json());

// Далее маршруты



// Подключение к PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Регистрация нового пользователя
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Авторизация пользователя
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Пользователь не найден' });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Неверный пароль' });
    }
    
    const token = jwt.sign(
      { userId: user.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token,
      user: {
        id: user.rows[0].id,
        username: user.rows[0].username,
        email: user.rows[0].email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Сохранение результатов теста
app.post('/api/save-result', async (req, res) => {
  try {
    const { userId, testType, score, totalQuestions } = req.body;
    
    const result = await pool.query(
      'INSERT INTO test_results (user_id, test_type, score, total_questions) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, testType, score, totalQuestions]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Получение результатов пользователя
app.get('/api/results/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const results = await pool.query(
      'SELECT * FROM test_results WHERE user_id = $1 ORDER BY completed_at DESC',
      [userId]
    );
    
    res.json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});