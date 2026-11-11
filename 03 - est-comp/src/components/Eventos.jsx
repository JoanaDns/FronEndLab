import React, { useState } from 'react'

function Eventos() {

    const[resultado, setDesloca] = useState()

    function desloca(){
        let estaGripado = prompt("Está gripado: ")
        let tempoViagem = Number(prompt("Quanto tempo de viagm: "))

        if(estaGripado === "nao" && tempoViagem <= 45){
            setDesloca("Viagem autorizada. Rumo ao show!")
        }else{
            setDesloca("Deslocamento inviável. Melhor recusar este evento.")
        }
    }
  return (
    <div className="Eventos">
      <h3>Deslocamento do Evento</h3>
      <button onClick={desloca}>Deslocamento</button>
      {resultado}
    </div>
  )
}

export default Eventos
