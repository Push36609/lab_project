import mysql from 'mysql2/promise';

async function initDB() {
  try {
    // 1: Connect to MySQL server (without specifying database first)
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Push@2005',
    });

    console.log('Connected to MySQL server successfully');

    // 2: Create database if it doesn't exist
    const dbName = 'lab_project_db';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    console.log(`Database '${dbName}' checked/created`);

    // 3: Connect to the specific database
    await connection.changeUser({ database: dbName });

    // 4: Create table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
      )
    `);
    console.log("Table 'users' checked/created");

    // 5: Insert a test user (check if exists first to avoid duplicate error)
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', ['john@example.com']);
    if (rows.length === 0) {
      await connection.execute(`
        INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com')
      `);
      console.log("Test user inserted");
    } else {
      console.log("Test user already exists");
    }

    // 6: Query users
    const [users] = await connection.execute(`SELECT * FROM users`);
    console.log("Current users:", users);

    await connection.end();
  } catch (error) {
    console.error("Database error:", error);
  }
}

initDB();