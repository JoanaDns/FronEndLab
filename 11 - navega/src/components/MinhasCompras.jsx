import React from 'react'
import { useState } from 'react'

function MinhasCompras() {

    const[resultado, setCompra] = useState()

    function compra(){

    }

  return (
    <div className="Compras">
      <h3>Minhas Compras</h3>
      {/* <button onClick={compra}>Compras</button> */}
      {resultado}
    </div>
  )
}

export default MinhasCompras
