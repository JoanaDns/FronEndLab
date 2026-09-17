
import './App.css'

function App() {

   function ração(){
    let gramas  = Number(prompt("Digite a quantidade: "))
    let preco = Number(prompt("Informe o preço do Kg: "))
    
    let kilo = gramas * 1000;
    let valor = preco * kilo

    alert("Deu " + kilo + ", ficou R$" + valor + "tudo.")
   }
   function obra(){
    let pagou = Number(prompt("Informe quanto pagou nas Obras: "));
    
    let porcentual = pagou * 3;

    alert("Voçê deve vender a R$" + porcentual + " cada Obra");
    
   

   }
   function contas(){
    let salario = Number(prompt("Informe seu Salário total: "))

    let moradia = Number(prompt("Informe o valor da Moradia: "))
    let agua = Number(prompt("Informe o valor da Água: "))
    let luz = Number(prompt("Informe o valor da Luz: "))
    let internet = Number(prompt("Informe o valor da Internet: "))
    let telefone = Number(prompt("Informe o valor do Telefone: "))
    let streamings = Number(prompt("Informe o valor da Streamings: "))
    let gasolina = Number(prompt("Informe o valor da Gasolina: "))
    let outros = Number(prompt("Informe o valor da Outros: "))

    let soma = moradia + agua + luz + internet + telefone + streamings + gasolina + outros;
    let sobra = salario - soma;

    alert("Valor total de todas as contas a pagar: R$" + soma + ", tirando isso do seu salário, sobra: R$ " + sobra)

   }

   function bomba(){
    let preco = Number(prompt("Digite o preço unitário: "))
    let quantidade = Number(prompt("Digite a quantidade usada por show: "))
    let show = Number(prompt("Digite a quantidade de shows: "))

    let multiplicar = preco * quantidade;
    let pagar = multiplicar * show;

    alert("Voçê tem " + show + " shows marcados e precisa de " + quantidade + " Bombas para cada show, cada bomba custa R$ " + preco + " e voçê pagará ao todo R$ " + pagar )
   }
   
   function lucro(){
    let gasto = Number(prompt("Quanto foi gasto em suprimentos e mercadorias: "))
    let vendaDeIngressos = Number(prompt("Qual o Valor da Venda dos Ingressos: "))
    let vendaDeItens =  Number(prompt("Qual o Valor da Venda dos Itens: "))

    let soma = vendaDeIngressos + vendaDeItens
    let lucroBruto = soma - gasto
    let porcentual =  (lucroBruto / gasto) * 100;

    alert("Valor em Reais: R$" + lucroBruto + "\nValor Porcentual:" + porcentual)
   }

   function faturamento(){ 
    let valorBruto = Number(prompt("Informe seu Faturamento Atual: "))
    let premiacoes = Number(prompt("Informe Quanto gastou em Premiações: "))
    let presentes  = Number(prompt("Informe Quanto gastou em Presentes: "))
    let comissoes  = Number(prompt("Informe Quanto gastou em Comissões: "))

    let soma = valorBruto - (premiacoes + presentes + comissoes)
  
    alert("Seu Lucro Foi de R$" + soma)
   }

   function fretes(){
    let peso = Number(prompt("Informe o Peso da Entrega: "));
    let distancia = Number(prompt("Informe a Distância da Entrega: "));
    let volume = Number(prompt("Informe o Volume da Entrega: "));

    let frete =15+(2*peso)+(0.05*distancia)+(10*volume);

    alert("O valor do frete é R$" + frete);
   }
  
   function monika(){
  
   const chance = (0.1 / (1 + 500 * n)) * 100;
   return chance.toFixed(2); 

   }
    
  function caminhao(){
    let pesoCaminhao = Number(prompt("Informe o Peso do Caminhão: "))
    let pesoCarga = Number(prompt("Informe o Peso da Carga: "))

    let resultado = pesoCarga - pesoCaminhao

    alert("O peso da Carga é " + resultado)
   }
  
   function salario(){
      let salario = Number(prompt("Digite seu Salário: "))
      let diasTrabalhados = Number(prompt("Digite quantos Dias, voçê trabalha: "))

      let resultado = salario / diasTrabalhados

      alert("Voçê ganha " + resultado + "por Dia.")
   }

   function custosIgreja(){
    let custo = Number(prompt("Digite o custo mensal: "));
    let doacao = Number(prompt("Digite o Valor das Doações: "));

    let resultado = custo - doacao

    alert("Ainda falta " + resultado + " Para cobrir os Custos da Igreja.")
   }

   function quantidadeDeLaranjas(){
      let laranjaI = Number(prompt("Digite a Quantidade Inicial de Laranjas: "))
      let laranjaF = Number(prompt("Digite a Quantidade Final de Laranjas: "))

      let resultado = laranjaI - laranjaF

      alert("Ao todo foram vendidas " + resultado + " Laranjas!")
   }
  
   function contadorDevs(){
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

      <button onClick={obra}>Obras</button>

     <hr />
      <button onClick={teste}>Teste</button>

     <hr />

        <button onClick={contas}>Sobra</button>

     <hr />

       <button onClick={fretes}>Fretes</button>

     <hr />

     <button onClick={custosIgreja}>Igreja</button>
      
     <hr />

      <button onClick={calcularMedia}>Média</button>
    
     <hr />

      <button onClick={contadorDevs}>Contar Devs</button>
       
     <hr />  
      
      <button onClick={calcularPontos}>Campeonato</button>

     <hr />

      <button onClick={faturamento}>Faturamento</button>
      
     <hr />

      <button onClick={salario}>Salário por Dia</button>

      <hr />
      
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>

     <hr />

      <button onClick={bomba}>Quantidade de Bombas</button>
    
     <hr />

      <button onClick={quantidadeDeLaranjas}>Contar Laranjas Vendidas</button>

    </div>
  )
}

export default App
