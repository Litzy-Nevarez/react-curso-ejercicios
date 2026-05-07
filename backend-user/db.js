import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "task_app"
});

console.log("Conectada a la BD");