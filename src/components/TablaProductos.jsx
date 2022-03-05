import React, { useEffect, useState } from 'react'

import getFromAPI from '../helpers/getFromAPI'
import FilaProductos from './FilaProductos';

const TablaProductos = ({ productsData, setProductsData }) => {
  
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
              <FilaProductos data={producto} setProductsData={setProductsData} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TablaProductos