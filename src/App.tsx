import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <div>
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
