import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Cabecera from '../components/Cabecera';

const Layout = () => {
  const [globalUser, setGlobalUser] = useState({});

  return (
    <>
      <header><Cabecera /></header>
      {/* <nav>
        <NavLink to="/productos">Productos</NavLink>
        <span>|</span>
        <NavLink to="/editar">Editar</NavLink>
      </nav> */}
      <div style={{backgroundColor: "#4A5568"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout