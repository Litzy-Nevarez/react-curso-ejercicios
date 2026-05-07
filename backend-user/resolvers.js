import { connection } from "./db.js";

export const root = {

    users: async () => {
        const [users] = await connection.query("SELECT * FROM users");

        for (let user of users) {
            const [tasks] = await connection.query(
                "SELECT * FROM tasks WHERE user_id = ?",
                [user.id]
            );

            user.tasks = tasks || [];
        }

        return users;
    },

    tasks: async () => {
        const [rows] = await connection.query("SELECT * FROM tasks");
        return rows;
    },

    createUser: async ({ name, email }) => {
        const [result] = await connection.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );

        return { id: result.insertId, name, email};
    },

    createTask: async ({ title, status, user_id }) => {
        const [result] = await connection.query(
            "INSERT INTO tasks (title, status, user_id) VALUES (?, ?, ?)",
            [title, status, user_id]
        );

        return { id: result.insertId, title, status, user_id};
    }
}