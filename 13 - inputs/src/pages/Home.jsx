import React, { useState } from 'react'

function Home() {

  const[inputLogin, setInputLogin] = useState('')

  function efetuarLogin(){
     if(inputLogin == "admin") {
         alert("Você recebeu acesso de Admin do Sistema")
     }else{
      alert("Você digitou errado, o login é Admin")
     }
  }
  return (
    <div className="home">
      <h1>Inputs Controlados</h1>
      <label htmlFor="">Login</label>

    <input type="text"
      value={inputLogin}
      onChange={(e) => setInputLogin(e.target.value)}
    />

       <button onClick={efetuarLogin}>Entrar</button>

       <p>
         {/*inputLogin*/}
       </p>
    </div>
  )
}

export default Home
