import { useState } from 'react'

function Peso() {

    const[resultado, setPeso] = useState()
     
    function PesoIdeal(){
        let altura = Number(prompt("informe sua Altura: "))
        let genero = Number(prompt("Informe seu Gênero(1 - feminino / 2 - masculino): "))
      
        if( genero === 1){
            setPeso((62.1 * altura) - 44.7)
        }else if(genero === 2){ 
            setPeso((72.7 * altura) - 58)
        }else{
            setPeso("Gênero Invalido.")
        }
    }
      return (
    <div className= "Peso">
        <h2>Peso Ideal</h2>
        <button onClick={PesoIdeal}>Calcular</button>
        {resultado}
    </div>
  )
}

export default Peso
