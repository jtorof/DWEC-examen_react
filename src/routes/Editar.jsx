import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import getFromAPI from '../helpers/getFromAPI'

const Editar = () => {
  const [productData, setProductData] = useState({})
  const params = useParams();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRate, setProductRate] = useState("");
  const navigate = useNavigate();
  const productURL = `http://localhost:5000/products/${params.productId}/`;
  
  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setProductData(data);
      console.log(url);
      console.log("llamada a api en editar");
    } catch (error) {
      console.log(error);
    }
  };  

  const updateAtApi = async (url, objectToEdit) => {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(objectToEdit),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const productObject = {
      title: productName,
      price: parseFloat(productPrice),
      rating: {
        rate: parseFloat(productRate)
      }
    }
    updateAtApi(productURL, productObject)

  }

  function handleBack() {
    navigate(-1);
  }


  useEffect(() => {
    getData(productURL);
  }, []);

  useEffect(() => {    
    setProductName(productData.title);
    setProductPrice(productData.price);
    setProductRate(productData.rating?.rate);
  }, [productData]);
  

  return (
    <div>
      <img src={productData.image} alt={`Imagen de ${productData.title}`} style={{ width: "200px" }} />
      <form action="" id="form" style={{ border: "1px solid grey" }} onSubmit={handleSubmit}>
        <p>EDITAR PRODUCTOS</p>
        <input type="text" id="title" name="title" onChange={handleChange} value={productName} placeholder='PRODUCTO' />
        <input type="text" id="price" name="price" onChange={handleChange} value={productPrice} placeholder='PRECIO' />
        <input type="text" id="rate" name="rate" onChange={handleChange} value={productRate} placeholder='CALIFICACION' />
        <button type='submit'>GUARDAR</button>
        <button type="button" onClick={handleBack}>CANCELAR</button>
      </form>
    </div>
  )
}

export default Editar