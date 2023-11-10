import React, { useEffect } from "react";
import { UseAuth } from "../../Hooks/UseAuth";
import { api } from "../../Services/api";
import Navbar from "../../Components/Navbar";
import BottomNavbar from "../../Components/BottomNavbar";


export function Home() {
  const { user, isAuthenticated } = UseAuth();


  return (<>
  <Navbar />
  <div className='bg-black vh-100'>
    {user ? (
      <h1 className='text-warning text-center'>CHEGA MAIS VAGABUNDA</h1>
    ) : (<>
      <h1 className='text-warning text-center'>METE o PÉ</h1>
    </>)}
  </div>
  {user && (
    <BottomNavbar/>
  )}
</>)}
