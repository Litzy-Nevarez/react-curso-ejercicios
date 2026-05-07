import axios from "axios";

const API = "http://localhost:4000/graphql";

export const getUsers = async () => {
    const res = await axios.post(API, {
        query: `
            {
                users {
                    id
                    name
                    tasks {
                        id
                        title
                        status
                    }
                }
            }
        `
    });

    return res.data.data.users;
}

export const createTask = async (task) => {
    const res = await axios.post(API, {
        query: `
            mutation {
                createTask(
                    title: "${task.title}",
                    status: "${task.status}",
                    user_id: ${task.user_id}
                ) { id }
            }
        `
    });

    return res.data.data.createTask;
}