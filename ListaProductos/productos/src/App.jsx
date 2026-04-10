
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import { useState } from "react";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {

	const [products, setProducts] = useState(initialProducts);

	const addProduct = (product) => {
		setProducts([...products, product]);
	}

	const updateProduct = (id, updatedProduct) => {
		setProducts(
			products.map(product => 
				product.id.toString() === id
				? {...updatedProduct, id}
				: product
			)
		)
	}

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home products={products} />} />
				<Route path="/create" element={<CreateProduct addProduct={addProduct} />} />
				<Route path="/edit/:id" element={<EditProduct products={products} updateProduct={updateProduct} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
