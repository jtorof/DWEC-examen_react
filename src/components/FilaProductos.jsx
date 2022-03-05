import React from 'react'
import { Link } from 'react-router-dom';
import getFromAPI from '../helpers/getFromAPI'

const productsURL = `http://localhost:5000/products`;

const FilaProductos = ({ data, setProductsData }) => {

  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setProductsData(data);
      console.log("llamada a api en filaproductos");
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromApi = async (id) => {
    try {
      const response = await fetch(`${productsURL}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      getData(productsURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{parseFloat(data.price).toFixed(2)} €</td>
      <td>{parseFloat(data.rating.rate).toFixed(2)}</td>
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