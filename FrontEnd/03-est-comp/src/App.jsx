import './App.css'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Eleicao from './components/Eleicao'
import Peso from './components/Peso'
import Maca from './components/Maca'
import Ganso from './components/Ganso'
import Recrutar from './components/Recrutar'
import Maquina from './components/Maquina'
import Eventos from './components/Eventos'
import Entrada from './components/Entrada'
import Manutencao from './components/Manutencao'
import Comando from './components/comando'
import Jaula from './components/Jaula'


function App() {

  return (
     <div className="App">
        <h1>03 estados e components</h1>
        
         <h2>#0030</h2>
         <Ganso/>
         <Recrutar/>
         <Maquina/>
         <Eventos/>
         <Entrada/>
         <Manutencao/>
         <Comando/>
         <Jaula/>

         <hr />

         <h2>#0027.sq05</h2>

        <Jogo/>
        <Pousada/>
        <Eleicao/>
        <Peso/>
        <Maca/>

    </div>
    
  )
}

export default App
