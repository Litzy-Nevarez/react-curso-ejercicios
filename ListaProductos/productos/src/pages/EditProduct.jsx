import React, { use, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function EditProduct({ products, updateProduct }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });


  useEffect(() => {

    const productFound = products.find(
      product => product.id.toString() === id
    )

    if (productFound) {
      setProduct(productFound);
    }

  }, [id, products]);

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, product);
    navigate('/');
  }

  return (
    <form className='container p-4' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Editar producto</legend>

        <input 
          type="text" 
          name='title' 
          className='form-control mb-2' 
          value={product.title} 
          onChange={handleInputChange} 
        />

        <input 
          type="text" 
          name='description' 
          className='form-control mb-2' 
          value={product.description} 
          onChange={handleInputChange} 
        />

        <button type="submit" className='btn btn-warning'>Actualizar</button>
      </fieldset>
    </form>
  )
}
