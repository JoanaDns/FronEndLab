
import './App.css'

function App() {

  function Monika(){
  
   const chance = (0.1 / (1 + 500 * n)) * 100;
   return chance.toFixed(2); 

   }
    
  function Caminhao(){
    let pesoCaminhao = Number(prompt("Informe o Peso do Caminhão: "))
    let pesoCarga = Number(prompt("Informe o Peso da Carga: "))

    let resultado = pesoCarga - pesoCaminhao

    alert("O peso da Carga é " + resultado)
  }
  
  function Salario(){
      let salario = Number(prompt("Digite seu Salário: "))
      let diasTrabalhados = Number(prompt("Digite quantos Dias, voçê trabalha: "))

      let resultado = salario / diasTrabalhados

      alert("Voçê ganha " + resultado + "por Dia.")
    }

   function CustosIgreja(){
    let custo = Number(prompt("Digite o custo mensal: "));
    let doacao = Number(prompt("Digite o Valor das Doações: "));

    let resultado = custo - doacao

    alert("Ainda falta " + resultado + " Para cobrir os Custos da Igreja.")
   }
   function QuantidadeDeLaranjas(){
      let laranjaI = Number(prompt("Digite a Quantidade Inicial de Laranjas: "))
      let laranjaF = Number(prompt("Digite a Quantidade Final de Laranjas: "))

      let resultado = laranjaI - laranjaF

      alert("Ao todo foram vendidas " + resultado + " Laranjas!")
   }
  
   function ContadorDevs(){
      let clt = Number(prompt("Digite quantos CLT tem: "))
      let estagiarios = Number(prompt("Digite quantos Estágiarios tem: "))
      let pj = Number(prompt("Digite quantos PJ tem: "))

      let quantidadeTotal = clt + estagiarios + pj

      alert("O Total  é " + quantidadeTotal + " Devs ao todo!")
   }

   function trocarSapatos(){
    let preço = Number(prompt("Digite o Preço: "))
    let quantidade = Number(prompt("Digite a Quantidade: "))

    let resultado = preço * quantidade
    
    alert("O Valor total da Troca é: R$" + resultado.toFixed(2))
  }

   function calcularPontos(){
    let vitorias = Number(prompt("Número de Vitórias: "))
    let empates = Number(prompt("Número de Empates: "))

    let pontos = vitorias*3 + empates*1
    
    alert("O teu time tem" + pontos + "pontos!")
  }

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

      <h2>Exercicios legais</h2>
       
      <button onClick={teste}>Teste</button>
    
     <hr />

     <button onClick={CustosIgreja}>Igreja</button>
      
     <hr />

      <button onClick={calcularMedia}>Média</button>
    
     <hr />

      <button onClick={ContadorDevs}>Contar Devs</button>
       
     <hr />  
      
      <button onClick={calcularPontos}>Campeonato</button>

     <hr />

        <button onClick={Salario}>Salário por Dia</button>
      
     <hr />

      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
    
     <hr />

      <button onClick={QuantidadeDeLaranjas}>Contar Laranjas Vendidas</button>

    </div>
  )
}

export default App
