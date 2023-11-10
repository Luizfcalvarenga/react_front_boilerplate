import { useState } from "react";
import { UseAuth } from "../../Hooks/UseAuth";
import Navbar from "../../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export function SignIn() {
  const { user, signInUser } = UseAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleUserLogin(e) {
    e.preventDefault();
    signInUser(userEmail, userPassword)
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

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('>>>>' + profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }


  return (<>
    <Navbar/>
    <div className='bg-black d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 60px)' }}>
      <div className='bg-dark card p-5 w-75 m-auto'>
        <p className='text-danger text-center fw-bold'>ENTRAR</p>
        <input className='bg-transparent mb-3 border border-danger rounded text-danger' placeholder="E-mail" onChange={(e) => setUserEmail(e.target.value)}/>
        <input className='bg-transparent border border-danger rounded text-danger' placeholder="Senha" type="password" id="password-input" onChange={(e) => setUserPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUserLogin(e);
            }
          }}
        />
        <div className="d-flex justify-content-start align-center gap-1">
          <input type="checkbox" onChange={(e) => handleTogglePasswordVisibility(e)}/>
          <label className='text-white fs-18'>Mostrar senha</label>
        </div>
        <button className='btn btn-outline-success btn-sm my-3 w-50' type="button" onClick={(e) => handleUserLogin(e)}>ENTRAR</button>
        <a className='text-decoration-none text-white-50' href="/sign_up">Cadastrar</a>
        <a className='text-decoration-none text-white-50' href="/recuperar_senha">Trocar Senha</a>
        <div className="g_id_signin" data-type="standard"></div>
      </div>
    </div>
  </>)
}
