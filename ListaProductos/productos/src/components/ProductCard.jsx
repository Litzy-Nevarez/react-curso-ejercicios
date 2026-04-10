import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <tr>
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td><img src={product.image} alt={product.name} width="100" /></td>
        <td>
          <Link to={`/edit/${product.id}`} className='btn btn-primary'>
            Editar
          </Link>
        </td>
    </tr>
  )
}
