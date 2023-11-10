import { useState } from "react";
import { UseAuth } from "../../Hooks/UseAuth";
import Navbar from "../../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export function SignUp() {
  const { user, signUpUser } = UseAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleUserSignUp(e) {
    e.preventDefault();
    signUpUser(userEmail, userPassword)
  }

  function handleTogglePasswordVisibility(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('password-input')
    if (e.target.checked) {
      passwordInput.type = "text"
    } else {
      passwordInput.type = "password"
    }
  }


  return (<>
    <Navbar/>
    <div className='bg-black d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 60px)' }}>
      <div className='bg-dark card p-5 w-75 m-auto'>
        <p className='text-danger text-center fw-bold'>CADASTRAR</p>
        <input className='bg-transparent mb-3 border border-danger rounded text-danger' placeholder="E-mail" onChange={(e) => setUserEmail(e.target.value)}/>
        <input className='bg-transparent border border-danger rounded text-danger' placeholder="Senha" type="password" id="password-input" onChange={(e) => setUserPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUserSignUp(e);
            }
          }}
        />
        <div className="d-flex justify-content-start align-center gap-1">
          <input type="checkbox" onChange={(e) => handleTogglePasswordVisibility(e)}/>
          <label className='text-white fs-18'>Mostrar senha</label>
        </div>
        <button className='btn btn-outline-success btn-sm my-3 w-50' type="button" onClick={(e) => handleUserSignUp(e)}>CADASTRAR</button>
        <a className='text-decoration-none text-white-50' href="/sign_in">Entrar</a>
        <div className="g_id_signin" data-type="standard"></div>
      </div>
    </div>

  </>)
}
