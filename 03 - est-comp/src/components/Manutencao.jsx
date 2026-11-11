import React, { useState } from 'react'

function Manutencao() {

    const[resultado, setManu] = useState()
     
    function manu(){
        let emManutencao = confirm("Está em manutenção: ")
        let emergenciaAtiva = confirm("Modo emergência ativado: ")

        if(emManutencao === false && emergenciaAtiva === false){
            setManu("Transporte liberado para uso.")
        }else{
            setManu("Transporte indisponível por motivo de segurança.")
        }
    }

  return (
    <div className="Manutenção">
      <h3>Manutenção</h3>
      <button onClick={manu}>Transporte</button>
      {resultado}
    </div>
  )
}

export default Manutencao
