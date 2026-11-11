import React, { useState } from 'react'

function Entrada() {

    const[resultado, setEntrada] = useState()

    function palco(){
        
        // Usar confirm com true our false!! -> ctrl e ":" = comentario
        let somFuncionando = confirm("O som está funcionando: ")
        let figurinoCompleto = confirm("O figurino está completo: ")
        
        if(somFuncionando === true && figurinoCompleto === true){
            setEntrada("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        }else if(somFuncionando === false && figurinoCompleto === true){
            setEntrada("Sem som. Realizar apresentação alternativa no salão.")
        }else if(somFuncionando === true && figurinoCompleto === false){
            setEntrada("Faltando parte do figurino. Te vira no improviso!")
        }else{
            setEntrada( "Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }

  return (
    <div className="Entrada">
      <h3>Entrada no Palco</h3>
      <button onClick={palco}>Entrada</button>
      {resultado}
    </div>
  )
}

export default Entrada
