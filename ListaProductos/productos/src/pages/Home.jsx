import React from 'react'
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
    return (
        <div className='container mt-3'>
            <h2>Lista de Productos</h2>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <ProductCard  key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
