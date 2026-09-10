
import './App.css'

function App() {
  function teste(){
   let nome = prompt("Qual é seu nome?")
   let BocaDaSapo = nome
   alert (nome + ", seu nome está na BocadoSapo!🐸");
  }
   
   function calcularMedia(){
    let n1 = Number(prompt("Digite sua Nota 1:"))
    let n2 = Number(prompt("Digite sua Nota 2:"))
    let Media = (n1+n2) / 2
    alert ("Sua Média é: " + Media);
  }
   return (
    <div className='cont-app'>
      <h1>JavaScript no React</h1> 
      <button onClick={teste}>Teste</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
