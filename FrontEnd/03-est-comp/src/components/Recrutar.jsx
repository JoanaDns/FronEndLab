import React, { useState } from 'react'

function Recrutar() {
    const[resultado, setRecruta] = useState()

    function teste(){
        let sabeNadar = prompt("Sabe nadar: ")
        let idade = Number(prompt("Qual sua idade: "))
        let recomedacao = prompt("Sim ou Não: ")

        if(sabeNadar === "sim" && idade >= 16){
            setRecruta("Aprovado para o navio!")
        }else if(recomedacao === "sim" && sabeNadar === "nao" && idade >= 14){
            setRecruta("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
        }else{
             setRecruta("Reprovado! Volte quando estiver mais preparado para o mar.")
        }

        
    }
  return (
    <div className="recrutar">
      <h3>Recrutamento</h3>
      <button onClick={teste}>Teste</button>
      {resultado}
    </div>
  )
}

export default Recrutar
