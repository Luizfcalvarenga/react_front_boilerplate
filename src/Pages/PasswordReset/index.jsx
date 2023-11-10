
import { api } from "../../Services/api";
import { useState } from "react";
import { UseAuth } from "../../Hooks/UseAuth";
import Navbar from "../../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export function PasswordReset() {
  const [userEmail, setUserEmail] = useState("");
  async function handlePasswordResetForUser(e) {
    e.preventDefault();
    try {
      const response = await api.post('/users/password', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: { email: userEmail },
      });

      if (response.data.success) {
        alert("deu bom")

      } else {
        alert("deus ruiom")
      }
    } catch (error) {
      console.error('Error occurred while making the password reset request:', error);
    }
  }

  return (<>
    <Navbar/>
    <div className='bg-black d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 60px)' }}>
      <div className='bg-dark card p-5 w-75 m-auto'>
        <p className='text-danger text-center fw-bold'>RECUPERAR SENHA</p>
        <input className='bg-transparent mb-3 border border-danger rounded text-danger' placeholder="E-mail" onChange={(e) => setUserEmail(e.target.value)}/>
        <button className='m-auto btn btn-outline-success btn-sm my-3 w-50' type="button" onClick={(e) => handlePasswordResetForUser(e)}>ENVIAR</button>
      </div>
    </div>
  </>)
}
