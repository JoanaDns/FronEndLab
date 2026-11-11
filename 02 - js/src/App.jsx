
import { useState } from "react";
import "./App.css";

function App() {  
   const[resultado, setResultado] = useState()
  
     function calcularDobro() {
      let n = Number(prompt("Digite o número A-GO-RA:  "))
      let dobro = n * 2
      setResultado(dobro)
     }
     function gerarRelatorioKowalski() {
     const relPF = Number(prompt("Digite a quantidade de relatórios para PF:"));
     const relPJ = Number(prompt("Digite a quantidade de relatórios para PJ:"));
     const tempoPF = Number(prompt("Digite o tempo gasto nos relatórios PF (em horas):"));
     const tempoPJ = Number(prompt("Digite o tempo gasto nos relatórios PJ (em horas):"));
     const valorPF = Number(prompt("Digite o valor total recebido de PF (R$):"));
     const valorPJ = Number(prompt("Digite o valor total recebido de PJ (R$):"));

      // Totais
     const totalRelatorios = relPF + relPJ;
     const tempoTotal = tempoPF + tempoPJ; 
     const valorTotal = valorPF + valorPJ;

     // Médias
     const mediaValorPF = relPF > 0 ? valorPF / relPF : 0;
     const mediaValorPJ = relPJ > 0 ? valorPJ / relPJ : 0;
     const mediaTempoPF = relPF > 0 ? tempoPF / relPF : 0;
     const mediaTempoPJ = relPJ > 0 ? tempoPJ / relPJ : 0;

     alert(
     `========================================\n` +
     `         📊 RELATÓRIO DO KOWALSKI        \n` +
     `========================================\n\n` +
     `📥 DADOS CRUS:\n` +
     `• Relatórios PF: ${relPF} | Tempo: ${tempoPF}h | Recebido: R$ ${valorPF.toFixed(2)}\n` +
     `• Relatórios PJ: ${relPJ} | Tempo: ${tempoPJ}h | Recebido: R$ ${valorPJ.toFixed(2)}\n\n` +
     `----------------------------------------\n` +
     `📌 CONSOLIDADO GERAL:\n` +
     `----------------------------------------\n` +
     `• Total de Relatórios: ${totalRelatorios}\n` +
     `• Tempo Total Trabalhado: ${tempoTotal}h\n` +
     `• Valor Total Recebido: R$ ${valorTotal.toFixed(2)}\n\n` +
     `----------------------------------------\n` +
     `📈 MÉDIAS POR RELATÓRIO:\n` +
     `----------------------------------------\n` +
     `• Pessoa Física (PF):\n` +
     `   - Média de Valor: R$ ${mediaValorPF.toFixed(2)}\n` +
     `   - Média de Tempo: ${mediaTempoPF.toFixed(2)}h/relatório\n\n` +
     `• Pessoa Jurídica (PJ):\n` +
     `   - Média de Valor: R$ ${mediaValorPJ.toFixed(2)}\n` +
     `   - Média de Tempo: ${mediaTempoPJ.toFixed(2)}h/relatório\n` +
     `========================================`
     );
     }
     function calcularFreelaJunin() {
     const horasEstimadas = Number(prompt("Digite a quantidade estimada de horas de desenvolvimento:"));

     const custoConsultor = 500;
     const valorHoraJunin = 350;

     const valorDesenvolvimento = horasEstimadas * valorHoraJunin;
     const precoTotalCliente = custoConsultor + valorDesenvolvimento;
     const lucroJunin = precoTotalCliente - custoConsultor;

     alert(
     `--- ORÇAMENTO FREELANCE - JUNIN ---\n\n` +
     `Horas estimadas: ${horasEstimadas}h\n` +
     `Preço total para o cliente: R$ ${precoTotalCliente.toFixed(2)}\n\n` +
     `Lucro do Junin: R$ ${lucroJunin.toFixed(2)}`
     );
     }
     function calcularCustoPrompt() {
     const caracteres = Number(prompt("Digite a quantidade de caracteres do prompt:"));
     const valorPorToken = Number(prompt("Digite o valor de 1 token (em R$):"));

     const taxaFixaTokens = 5;
     const tokensPorCaracter = 1;

     const totalTokens = taxaFixaTokens + (caracteres * tokensPorCaracter);
     const custoTotalReais = totalTokens * valorPorToken;

     alert(
     `--- STARTUP I.A. - CUSTO DE PROMPT ---\n\n` +
     `Caracteres digitados: ${caracteres}\n` +
     `Total de tokens gastos: ${totalTokens}\n` +
     `Custo total: R$ ${custoTotalReais.toFixed(2)}`
     );
     }
     function calcularLucroJares() {
     const caminhoes = Number(prompt("Digite a quantidade de caminhões carregados:"));

     const jaresPorCaminhao = 50;
     const precoVendaJare = 90;
     const fretePorCaminhao = 450;

     const totalJares = caminhoes * jaresPorCaminhao;
     const faturamentoTotal = totalJares * precoVendaJare;
     const custoFreteTotal = caminhoes * fretePorCaminhao;
     const lucroTotal = faturamentoTotal - custoFreteTotal;

      alert(
      `--- FAZENDA DO GAEL - VENDAS DE JARÉS ---\n\n` +
      `Caminhões carregados: ${caminhoes}\n` +
      `Total de jarés: ${totalJares}\n` +
      `Faturamento: R$ ${faturamentoTotal.toFixed(2)}\n` +
      `Custo do frete: R$ ${custoFreteTotal.toFixed(2)}\n` +
      `Lucro final: R$ ${lucroTotal.toFixed(2)}`
      );
     } 
     function carnes() {
      let pessoas = Number(prompt("Digite a quantidade de Pessoas: "))
      let carne = Number(prompt("Digite a quantidade de  Carne por Pessoa: "))
      let cerveja = Number(prompt("Digite a quantidade Cerveja por Pessoa: "))
      let agua = Number(prompt("Digite a quantidade Água por Pessoa: "))
      let refri = Number(prompt("Digite a quantidade Refri por Pessoa: "))
       
      let soma = carne + cerveja + agua + refri;
      let quantidadePorPessoa = soma * pessoas;

      alert("É necessário " + soma + "de Comida Por Pessoa, e " + quantidadePorPessoa + "ao todo!")
     }
     function ração() {
    let gramas = Number(prompt("Digite a quantidade: "));
    let preco = Number(prompt("Informe o preço do Kg: "));

    let kilo = gramas * 1000;
    let valor = preco * kilo;

    alert("Deu " + kilo + ", ficou R$" + valor + "tudo.");
     }
     function obra() {
    let pagou = Number(prompt("Informe quanto pagou nas Obras: "));

    let porcentual = pagou * 3;

    alert("Voçê deve vender a R$" + porcentual + " cada Obra");
     }
     function contas() {
    let salario = Number(prompt("Informe seu Salário total: "));

    let moradia = Number(prompt("Informe o valor da Moradia: "));
    let agua = Number(prompt("Informe o valor da Água: "));
    let luz = Number(prompt("Informe o valor da Luz: "));
    let internet = Number(prompt("Informe o valor da Internet: "));
    let telefone = Number(prompt("Informe o valor do Telefone: "));
    let streamings = Number(prompt("Informe o valor da Streamings: "));
    let gasolina = Number(prompt("Informe o valor da Gasolina: "));
    let outros = Number(prompt("Informe o valor da Outros: "));

    let soma =
      moradia +
      agua +
      luz +
      internet +
      telefone +
      streamings +
      gasolina +
      outros;
    let sobra = salario - soma;

    alert(
      "Valor total de todas as contas a pagar: R$" +
        soma +
        ", tirando isso do seu salário, sobra: R$ " +
        sobra,
    );
     }
     function bomba() {
    let preco = Number(prompt("Digite o preço unitário: "));
    let quantidade = Number(prompt("Digite a quantidade usada por show: "));
    let show = Number(prompt("Digite a quantidade de shows: "));

    let multiplicar = preco * quantidade;
    let pagar = multiplicar * show;

    alert(
      "Voçê tem " +
        show +
        " shows marcados e precisa de " +
        quantidade +
        " Bombas para cada show, cada bomba custa R$ " +
        preco +
        " e voçê pagará ao todo R$ " +
        pagar,
    );
     }
     function lucro() {
     let gasto = Number(
      prompt("Quanto foi gasto em suprimentos e mercadorias: "),
     );
     let vendaDeIngressos = Number(
      prompt("Qual o Valor da Venda dos Ingressos: "),
     );
     let vendaDeItens = Number(prompt("Qual o Valor da Venda dos Itens: "));

     let soma = vendaDeIngressos + vendaDeItens;
     let lucroBruto = soma - gasto;
     let porcentual = (lucroBruto / gasto) * 100;

     alert(
      "Valor em Reais: R$" + lucroBruto + "\nValor Porcentual:" + porcentual,
     );
     }
     function faturamento() {
     let valorBruto = Number(prompt("Informe seu Faturamento Atual: "));
     let premiacoes = Number(prompt("Informe Quanto gastou em Premiações: "));
     let presentes = Number(prompt("Informe Quanto gastou em Presentes: "));
     let comissoes = Number(prompt("Informe Quanto gastou em Comissões: "));

     let soma = valorBruto - (premiacoes + presentes + comissoes);

     alert("Seu Lucro Foi de R$" + soma);
     }
     function fretes() {
     let peso = Number(prompt("Informe o Peso da Entrega: "));
     let distancia = Number(prompt("Informe a Distância da Entrega: "));
     let volume = Number(prompt("Informe o Volume da Entrega: "));

     let frete = 15 + 2 * peso + 0.05 * distancia + 10 * volume;

     alert("O valor do frete é R$" + frete);
     }
     function monika() {
    const chance = (0.1 / (1 + 500 * n)) * 100;
    return chance.toFixed(2);
     }
     function caminhao() {
     let pesoCaminhao = Number(prompt("Informe o Peso do Caminhão: "));
     let pesoCarga = Number(prompt("Informe o Peso da Carga: "));

     let resultado = pesoCarga - pesoCaminhao;

     alert("O peso da Carga é " + resultado);
     }
     function salario() {
    let salario = Number(prompt("Digite seu Salário: "));
    let diasTrabalhados = Number(
      prompt("Digite quantos Dias, voçê trabalha: "),
    );

    let resultado = salario / diasTrabalhados;

    alert("Voçê ganha " + resultado + "por Dia.");
     }
      function custosIgreja() {
    let custo = Number(prompt("Digite o custo mensal: "));
    let doacao = Number(prompt("Digite o Valor das Doações: "));

    let resultado = custo - doacao;

    alert("Ainda falta " + resultado + " Para cobrir os Custos da Igreja.");
     }
     function quantidadeDeLaranjas() {
    let laranjaI = Number(prompt("Digite a Quantidade Inicial de Laranjas: "));
    let laranjaF = Number(prompt("Digite a Quantidade Final de Laranjas: "));

    let resultado = laranjaI - laranjaF;

    alert("Ao todo foram vendidas " + resultado + " Laranjas!");
     }
     function contadorDevs() {
    let clt = Number(prompt("Digite quantos CLT tem: "));
    let estagiarios = Number(prompt("Digite quantos Estágiarios tem: "));
    let pj = Number(prompt("Digite quantos PJ tem: "));

    let quantidadeTotal = clt + estagiarios + pj;

    alert("O Total  é " + quantidadeTotal + " Devs ao todo!");
     }
     function trocarSapatos() {
    let preço = Number(prompt("Digite o Preço: "));
    let quantidade = Number(prompt("Digite a Quantidade: "));

    let resultado = preço * quantidade;

    alert("O Valor total da Troca é: R$" + resultado.toFixed(2));
     }
     function calcularPontos() {
    let vitorias = Number(prompt("Número de Vitórias: "));
    let empates = Number(prompt("Número de Empates: "));

    let pontos = vitorias * 3 + empates * 1;

    alert("O teu time tem" + pontos + "pontos!");
     }
     function teste() {
    let nome = prompt("Qual é seu nome?");
    let BocaDaSapo = nome;
    alert(nome + ", seu nome está na BocadoSapo!🐸");
     }
     function calcularMedia() {
    let n1 = Number(prompt("Digite sua Nota 1:"));
    let n2 = Number(prompt("Digite sua Nota 2:"));
    let Media = (n1 + n2) / 2;
    alert("Sua Média é: " + Media);
     }

     return (
     <div className="cont-app">
     <h1>JavaScript no React</h1>
     <h2>Exercicios legais</h2>

     <button onClick={calcularDobro}>Dobro</button>
     <button onClick={gerarRelatorioKowalski}>Kowalski</button>
     <button onClick={calcularFreelaJunin}>Junin</button>
     <button onClick={calcularCustoPrompt}>Prompt</button>
     <button onClick={calcularLucroJares}>Jares</button> 
     <button onClick={obra}>Obras</button>
     <button onClick={lucro}>lucro</button>
     <button onClick={ração}>Ração</button>
     <button onClick={teste}>Teste</button>
     <button onClick={contas}>Sobra</button>
     <button onClick={carnes}>Carne</button>
     <button onClick={fretes}>Fretes</button>
     <button onClick={custosIgreja}>Igreja</button>
     <button onClick={calcularMedia}>Média</button>
     <button onClick={monika}>Mônika</button>
     <button onClick={caminhao}>Caminhao</button>
     <button onClick={contadorDevs}>Contar Devs</button>
     <button onClick={calcularPontos}>Campeonato</button>
     <button onClick={faturamento}>Faturamento</button>
     <button onClick={salario}>Salário por Dia</button>
     <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
     <button onClick={bomba}>Quantidade de Bombas</button>
     <button onClick={quantidadeDeLaranjas}>Contar Laranjas Vendidas</button>
     </div>
  );
}

export default App;
