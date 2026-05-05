import { GraphQLSchema, GraphQLString, GraphQLFloat, GraphQLList, GraphQLInt, GraphQLObjectType } from "graphql";
import { pool } from "./../../db.js";

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        stock: { type: GraphQLInt },
        category: { type: GraphQLString },
        image: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve: async () => {
                const [rows] = await pool.query("SELECT * FROM products");
                return rows;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({ 
    name: "Mutation",
    fields: {

        // Crear un producto
        createProduct: {
            type: ProductType,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                stock: { type: GraphQLInt },
                category: { type: GraphQLString },
                image: { type: GraphQLString } 
            },
            resolve: async (_, args) => {
                const { title, description, price, stock, category, image } = args;

                const [result] = await pool.query(
                    "INSERT INTO products (title, description, price, stock, category, image) VALUES (?, ?, ?, ?, ?, ?)",
                    [title, description, price, stock, category, image]
                );

                return {
                    id: result.insertId,
                    ...args
                };
            }
        },

        // Actualizar producto
        updateProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLInt },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                stock: { type: GraphQLInt },
                category: { type: GraphQLString },
                image: { type: GraphQLString } 
            },
            resolve: async (_, args) => {
                const { id, ...data } = args;

                await pool.query(
                    "UPDATE products SET title=?, description=?, price=?, stock=?, category=?, image=? WHERE id=?",
                    [
                        data.title, 
                        data.description, 
                        data.price, 
                        data.stock, 
                        data.category, 
                        data.image, 
                        id
                    ]
                )

                return {
                    id, ...data
                };
            }
        },
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery, 
    mutation: Mutation
});

