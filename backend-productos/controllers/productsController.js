import { pool } from "./../db.js";

// Obtener todos los productos
export const getProducts = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
}

// Obtener un producto
export const getProduct = async (req, res) => {
    const [rows] = await pool.query(
        "SELECT * FROM products WHERE id = ? ",
        [req.params.id]
    );

    if (rows.length <= 0 ) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(rows[0]);
}

// Crear producto
export const createProduct = async (req, res) => {
    const { title, description, price, stock, category, image } = req.body;

    const [result] = await pool.query(
        "INSERT INTO products (title, description, price, stock, category, image) VALUES (?, ?, ?, ?, ?, ?)",
        [title, description, price, stock, category, image]
    );

    res.json({ id: result.insertId });
}

// Actualizar producto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    await pool.query(
        "UPDATE products SET title = ?, description = ? WHERE id = ? ",
        [title, description, id]
    );

    return res.status(204).json({ message: "Producto actualizado" });
}

// ELiminar producto
export const deleteProduct = async (req, res) => {

    await pool.query("DELETE FROM products WHERE id = ? ", [req.params.id]);
    return res.status(204).json({ message: "Producto eliminado" });
}