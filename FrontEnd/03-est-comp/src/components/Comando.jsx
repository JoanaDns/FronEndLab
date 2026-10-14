import React, { useState } from 'react'

function Comando() {

    const[resultado, setComando] = useState()

    function comando(){
        let crachaValido = confirm("Você tem o cracha: ")
        let digitalReconhecida = confirm("Você tem a digital: ")

        if(crachaValido === true && digitalReconhecida === true){
            setComando("Acesso permitido")
        }else{
            setComando("Acesso Negado")
        }
    }

  return (
    <div className="Comando">
      <h3>Acesso</h3>
      <button onClick={comando}>Acesso</button>
      {resultado}
    </div>
  )
}

export default Comando
