import React from 'react'
import { Link } from 'react-router-dom';

const productsURL = `http://localhost:5000/products`;

const FilaProductos = ({ data }) => {

  const deleteFromApi = async (id) => {
    try {
      const response = await fetch(`${productsURL}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.price} €</td>
      <td>{data.rating.rate}</td>
      <td>
        <Link to={`/editar/${data?.id}`}>
          <button>Editar</button>
        </Link>
        <button onClick={() => { deleteFromApi(data.id) }}>Borrar</button>
      </td>
    </>
  )
}

export default FilaProductos