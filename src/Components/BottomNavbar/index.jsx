import React from "react";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BottomNavbar() {
  const { user, signOutUser, isAuthenticated } = useContext(AuthContext);

  return (
    <div className='bg-dark p-3 d-flex justify-content-between position-sticky bottom-0 w-100'>
      <a className='text-decoration-none text-white-50' href='#'>Home</a>
      <a className='text-decoration-none text-white-50' href='#'>Entrar</a>
      <a className='text-decoration-none text-white-50' href='#'>Entrar</a>
    </div>
  );
}
