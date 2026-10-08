import React, { useState } from 'react'

function Maca() {

    const[resultado, setMaca] = useState()
   
    function Maca(){
       let maca = Number(prompt("Quantos maças:  "))
       let valor 
       if(maca <= 12){
           valor = 0.30
       }else{
           valor = 0.25   
       }
       
       let total = maca * valor
       setMaca("Valor total, é: " + total)
    }


  return (
    <div className="Maca">
        <h2>Valores</h2>
        <button onClick={Maca}>Valores maça</button>
        {resultado}
    </div>
    
  )

}



export default Maca
