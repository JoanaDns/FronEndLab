import React, { useState } from 'react'

function Eleicao() {
    const[resultado, setVoto] = useState()
    
    function votar(){
        let idade = Number(prompt("Digite a idade: "))
        if(idade < 16){
            setVoto("Não pode Votar.")
        }else if(idade >= 16 && idade <= 17){
             setVoto("Pode Votar.")
        }else if(idade >= 18 && idade <= 65){
            setVoto("Voto Obrigatorio!")
        }else{
            setVoto("Voto facultativo")
        }

    }

  return (
    <div className="Eleicao">
        <h2>Eleição 2026</h2>
        <button onClick={votar}>Votar</button>
        {resultado}
    </div>
  )
}

export default Eleicao
