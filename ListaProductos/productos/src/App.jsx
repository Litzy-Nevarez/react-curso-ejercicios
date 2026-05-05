
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import { useState, useEffect } from "react";
// import { initialProducts } from "./data/products";

// import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "./data/products";
import { getProducts, createProduct, updateProduct } from "./data/products";
import "./App.css";

function App() {

	const [products, setProducts] = useState([]);

	const addProduct = async (product) => {
		await createProduct(product);

		const data = await getProducts();
		setProducts(data);
	};

	const actualizarProduct = async (id, actualizarProduct) => {
		await updateProduct(id, actualizarProduct);

		// const data = await getProducts();
		loadProducts();
	}

	// const eliminarProduct = async (id, eliminarProduct) => {
	// 	await deleteProduct(id, eliminarProduct);

	// 	const data = await getProduct();
	// 	loadProducts();
	// }

	const loadProducts = async () => {
		const data = await getProducts();
		setProducts(data);
	}


	useEffect(() => {

		loadProducts();

	}, []);

	// const addProduct = (product) => {
	// 	setProducts([...products, product]);
	// }

	// const updateProduct = (id, updatedProduct) => {
	// 	setProducts(
	// 		products.map(product => 
	// 			product.id.toString() === id
	// 			? {...updatedProduct, id}
	// 			: product
	// 		)
	// 	)
	// }

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home products={products} />} />
				<Route path="/create" element={<CreateProduct addProduct={addProduct} />} />
				<Route path="/edit/:id" element={<EditProduct products={products} updateProduct={updateProduct} />} />
				{/* <Route path="/delete/:id" element={<EditProduct products={products} deleteProduct={deleteProduct} />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
