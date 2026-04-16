import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTareas = () => 
    axios.get(`${apiUrl}?_limit=10`);

export const crearTarea = (data) => 
    axios.post(apiUrl, data);

export const eliminarTarea = (id) => 
    axios.delete(`${apiUrl}/${id}`);

export const completarTarea = (id, data) => 
    axios.put(`${apiUrl}/${id}`, data);