import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Apresentacao from './components/Apresentacao'
import Header from './components/Header'
import { EstiloGlobal } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <div>
        <RouterProvider router={rotas} />
        <Apresentacao />
      </div>
    </>
  )
}

export default App
