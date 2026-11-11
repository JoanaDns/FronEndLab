
import React, { useState } from 'react'

function Lesma() {
    const [inputLesmas, setInputLesmas] = useState('')
    const [inputVelocidade, setInputVelocidade] = useState('')
    const [inputResultado, setInputResultado] = useState('Digite a quantidade e as velocidades')

    function calcularLesmas() {

        let L = Number(inputLesmas);
        let velocidades = inputVelocidade.split(' ').map(Number);

        let maior = 0;

        for (let i = 0; i < L; i++) {

            if (velocidades[i] > maior) {
                maior = velocidades[i];
            }

        }

        if (maior < 10) {
            setInputResultado('Nível 1');
        }
        else if (maior < 20) {
            setInputResultado('Nível 2');
        }
        else {
            setInputResultado('Nível 3');
        }

    }

    return (
        <div className='lesma'>
            <h1>Corrida das Lesmas</h1>

            <label htmlFor="">Quantidade de lesmas</label>

            <input
                type="text"
                value={inputLesmas}
                onChange={(e) => setInputLesmas(e.target.value)}
            />

            <label htmlFor="">Velocidade das lesmas</label>

            <input
                type="text"
                value={inputVelocidade}
                onChange={(e) => setInputVelocidade(e.target.value)}
            />

            <button onClick={calcularLesmas}>
                Calcular nível
            </button>

            <p>{inputResultado}</p>

        </div>
    )
}

export default Lesma
