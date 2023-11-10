import React from "react";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/Images/camaleao.png';
export default function Navbar() {
  const { user, signOutUser, isAuthenticated } = useContext(AuthContext);
  console.log(user)
  return (

    <nav class="navbar bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" width="30" height="24"/>
        </a>
        {user ? (
          <a className='text-decoration-none text-white-50' onClick={() => signOutUser()}>SAIR</a>
        ) : (<>
          <a className='text-decoration-none text-white-50' href='/sign_in'>Entrar</a>
        </>)}
      </div>
    </nav>

  );
}
