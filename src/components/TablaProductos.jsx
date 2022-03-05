import React, { useEffect, useState } from 'react'

import getFromAPI from '../helpers/getFromAPI'
import FilaProductos from './FilaProductos';

const productsURL = `http://localhost:5000/products`;

const TablaProductos = () => {
  const [productsData, setProductsData] = useState([]);

  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setProductsData(data);
      console.log("llamada a api en tablaproductos");
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(productsURL);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan="5">PRODUCTOS ALMACENADOS</td>
          </tr>
        </thead>
        <tbody>
          {productsData.map((producto, index) => (
            <tr key={index} >
              <FilaProductos data={producto} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TablaProductos