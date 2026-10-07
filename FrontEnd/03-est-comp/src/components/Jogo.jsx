import React, { useState } from 'react'

function Jogo() {
  const[resultado, setResultado] = useState()
   
     function classificar(){
        let pontos = Number(prompt("Quantos pontos? "))
        if(pontos <= 10){
         setResultado("Mogo o Betinho...🤢")
         //}Else if (pontos >10 && pontos <= 100){
        }else if(pontos <= 100){
             setResultado("Mantenha a esperança, o sol nasce para todos...🙂")
        }else if(pontos <= 200){
            setResultado("Supimpinha😝")
        }else{
            setResultado("Divou!!💅🩷")
        }
    }
        return (
            <div className="Jogo">
                <h2>Jogo do Mano Juca.</h2>
                <button onClick={classificar}>Classificar</button>
                {resultado}
            </div>

        )
}

export default Jogo
