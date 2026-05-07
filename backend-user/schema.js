import { buildSchema } from "graphql";

export const schema = buildSchema(
    `
        type User {
            id: ID
            name: String
            email: String
            tasks: [Task]
        }

        type Task {
            id: ID
            title: String
            status: String
            user_id: ID
        }

        type Query {
            users: [User]
            tasks: [Task]
        }

        type Mutation {
            createUser(name: String, email: String) : User
            createTask(title: String, status: String, user_id: ID) : Task
        }
    
    `
);