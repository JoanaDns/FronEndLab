import React from 'react'
import { useState } from 'react'

function Ofertas() {

    const[resultado, setFer] = useState()

    function oferta(){

    }

  return (
    <div className="Ofertas">
      <h3>Ofertas do dia</h3>
      {/* <button onClick={oferta}>Ver ofertas</button> */}
      {resultado}
    </div>
  )
}

export default Ofertas
