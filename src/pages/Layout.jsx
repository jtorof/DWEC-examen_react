import React from 'react'
import { Outlet } from 'react-router-dom';
import Cabecera from '../components/Cabecera';

const Layout = () => {
  return (
    <>
      <header><Cabecera /></header>
      <div style={{backgroundColor: "#4A5568"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout