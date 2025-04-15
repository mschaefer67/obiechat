import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "myapp",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error: ", err.message);
    process.exit(1);
  } else {
    console.log("Connected to MySQL Database");
  }
});
