import React, { useState } from 'react'

function Maquina() {

    const[resultado, setMaquina] = useState()

    function maquinaFumaca(){
        let criancasPequenas =prompt("Tem crianças: ")
        let velocidadeVento = Number(prompt("Qual a velocidade do vento: "))

        if(criancasPequenas === "nao" && velocidadeVento >=  0.5){
            setMaquina("Fumaça liberada. Que comecem os mistérios!")
        }else{
            setMaquina("Fumaça bloqueada. Aguardar condições ideais.")
        }
    }
  return (
    <div className="Máquina">
      <h3>Fumaça Mística</h3>
      <button onClick={maquinaFumaca}>Fumaça Mística</button>
      {resultado}
    </div>
  )
}

export default Maquina
