
import React, { useState } from 'react'

function Combustivel() {
    const [inputCombustivel, setInputCombustivel] = useState('')
    const [inputResultado, setInputResultado] = useState('Digite o código e aperte o botão')

    const [alcool, setAlcool] = useState(0)
    const [gasolina, setGasolina] = useState(0)
    const [diesel, setDiesel] = useState(0)

    function calcularCombustivel() {

        let N = Number(inputCombustivel);

        if (N === 1) {
            setAlcool(alcool + 1);
        } 
        else if (N === 2) {
            setGasolina(gasolina + 1);
        } 
        else if (N === 3) {
            setDiesel(diesel + 1);
        } 
        else if (N === 4) {
            setInputResultado(
                `MUITO OBRIGADO\nÁlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`
            );
        } 
        else {
            setInputResultado('Código inválido! Digite novamente.');
        }

        if (N >= 1 && N <= 3) {
            setInputResultado('Combustível registrado! Digite outro código.');
        }
    }

    return (
        <div className='combustivel'>
            <h1>Tipo de Combustível</h1>

            <label htmlFor="">Digite o código</label>

            <input
                type="text"
                value={inputCombustivel}
                onChange={(e) => setInputCombustivel(e.target.value)}
            />

            <button onClick={calcularCombustivel}>
                Registrar combustível
            </button>

            <p style={{ whiteSpace: 'pre-line' }}>
                {inputResultado}
            </p>

        </div>
    )
}

export default Combustivel
