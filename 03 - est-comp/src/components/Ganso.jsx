import React, { useState } from 'react'

function Ganso() {
    
    const[resultado, setGanso] = useState()

    function  calcularProvisoes(){
       let m = Number(prompt("Quantos marujos: "))
       let c = Number(prompt("Quantos kilos de comida: "))
       let quantidade = c / m
       if(m >= 10 && quantidade >= 1.5){
         setGanso("Preparesse para uma Aventura!")
       }else{
         setGanso("Não foi dessa vez...")
       }
    }

  return (
    <div className="ganso">
      <h3>Ganso</h3>
      <button onClick={calcularProvisoes}>Ganso - Provisões</button>
      {resultado}
    </div>

  )
}

export default Ganso
