import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function CreateProduct({ addProduct }) {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const producto = {
      id: uuidv4(),
      title, 
      description,
      price: Number(price),
      stock: Number(stock),
      image,
      category
    }

    addProduct(producto);
    navigate('/');

  }

  return (
    <form className='container p-4' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Crear nuevo producto</legend>
        <div className='mb-3'>
          <label htmlFor="title" className='form-label'>Nombre</label>
          <input
            type="text"
            className='form-control'
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Nombre del producto'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="price" className='form-label'>Precio</label>
          <input
            type="number"
            className='form-control'
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Precio del producto'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="description" className='form-label'>Descripción</label>
          <input
            type="text"
            className='form-control'
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Descripción del producto'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="stock" className='form-label'>Stock</label>
          <input
            type="number"
            className='form-control'
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder='Cantidad en stock'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="image" className='form-label'>Imagen</label>
          <input
            type="file"
            className='form-control'
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="category" className='form-label'>Categoría</label>
          <input
            type="text"
            className='form-control'
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Categoría del producto'
          />
        </div>

        <button type="submit" className='btn btn-primary mt-3'>Crear</button>
      </fieldset>
    </form>
  )
}
