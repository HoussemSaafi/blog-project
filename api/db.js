
import mysql from "mysql"
import dotenv from 'dotenv'
dotenv.config()
export const db=mysql.createConnection({
   host :process.env.DB_Host,
   user:process.env.DB_USER,
   password: process.env.DB_KEY,
   database:process.env.DB_NAME
})
db.connect((err) => {
   if (err) {
     console.error('Error connecting to database: ', err);
     return;
   }
   console.log('Connected to database!');
 });