import mysql from 'mysql2/promise';

 //1: to connect to mysql database
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Push@2005',
  database: 'mysql'

});
console.log('MySQL Connected successfully');

//2:we need to create a db

// await db.execute(`CREATE DATABASE IF NOT EXISTS test`);
// console.log(await db.execute("SHOW DATABASES"));

//3: we need to create a table

// await db.execute(`CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE
// );
//     `);

await db.execute(`
  INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com')

`);

await db.execute(`select * from users`);