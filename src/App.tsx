import Apresentacao from './components/Apresentacao'
import Header from './components/Header'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <div>
        <Header />
        <Apresentacao />
      </div>
    </>
  )
}

export default App
