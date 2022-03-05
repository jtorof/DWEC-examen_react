import React, { useState } from 'react'
import getFromAPI from '../helpers/getFromAPI'

const productsURL = `http://localhost:5000/products`;

const FormProductos = ({ productsData, setProductsData }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRate, setProductRate] = useState("");

  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setProductsData(data);
      console.log("llamada GET a api en FormProductos");
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setProductRate("");
  }

  const insertIntoApi = async (url, objectToUpload) => {
    for (const product of productsData) {
      if (product.title === objectToUpload.title) {
        console.log(product.title);
        alert("el producto ya existe");
        console.log("el producto ya existe");
        //resetForm();
        return;
      }
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objectToUpload),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      getData(productsURL);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.length === 0 || productPrice.length === 0 || productRate === 0) {
      alert("Rellene todos los campos");
      return;
    }
    const productObject = {
      title: productName,
      price: parseFloat(productPrice),
      rating: {
        rate: parseFloat(productRate)
      }
    }
    console.log(productObject);
    insertIntoApi(productsURL, productObject);
  }

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setProductName(e.target.value);
    }
    if (e.target.name === "price") {
      setProductPrice(e.target.value);
    }
    if (e.target.name === "rate") {
      setProductRate(e.target.value);
    }
  }

  return (
    <>
      <form action="" id="form" style={{ border: "1px solid grey" }} onSubmit={handleSubmit}>
        <p>PRODUCTOS</p>
        <input type="text" id="title" name="title" onChange={handleChange} value={productName} placeholder='PRODUCTO' />
        <input type="text" id="price" name="price" onChange={handleChange} value={productPrice} placeholder='PRECIO' />
        <input type="text" id="rate" name="rate" onChange={handleChange} value={productRate} placeholder='CALIFICACION' />
        <button type='submit'>GUARDAR</button>
        <button type="button" onClick={resetForm}>LIMPIAR</button>
      </form>
    </>
  )
}

export default FormProductos