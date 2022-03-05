import React, { useEffect, useState } from 'react'
import getFromAPI from '../helpers/getFromAPI'

const usersURL = `http://localhost:5000/users`;

const Cabecera = () => {
  const [userData, setUserData] = useState([]);

  const getData = async (url) => {
    try {
      const data = await getFromAPI(url);
      setUserData(data);
      console.log("llamada a api en cabecera");
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(usersURL);
  }, []);

  return (
    <>
      <div>
        <p>USUARIO: {userData[0]?.email}</p>
        <p>FECHA: 22 febrero 2022</p>
      </div>
      <h1>EXAMEN DWEC JESÚS TORO</h1>
    </>
  )
}

export default Cabecera