import React, { useState } from 'react'
function Pousada() {

    const[conta, setConta] = useState()

    function avaliar(){
       let dias = Number(prompt("Quantos dias:  "))
       let diaria 
       if(dias <= 5){
           diaria = 100
       }else if(dias <= 10){
           diaria = 90
       }else{
           diaria = 80
       }
       let valor = dias * diaria
       let desconto = valor * 25/100;
       let multa = 150
       let precoFinal = valor - desconto + multa

       setConta("Vai Pagar R$" + precoFinal);

    }
  
    return (
    <div className='pousada'>
      <h2>Pousada</h2>
      <button onClick={avaliar}>Fechar Conta</button>
      {conta}
    </div>
  )
}

export default Pousada
