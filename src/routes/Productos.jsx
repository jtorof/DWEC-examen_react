import React, { useEffect, useState } from 'react'
import FormProductos from '../components/FormProductos'
import TablaProductos from '../components/TablaProductos'
import getFromAPI from '../helpers/getFromAPI'


const productsURL = `http://localhost:5000/products`;

const Productos = () => {
  const [productsData, setProductsData] = useState([]);

  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setProductsData(data);
      console.log("llamada GET a api en Productos");
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
      <FormProductos productsData={productsData} setProductsData={setProductsData} />
      <TablaProductos productsData={productsData} setProductsData={setProductsData} />
    </>
  )
}

export default Productos