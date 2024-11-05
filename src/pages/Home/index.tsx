import { useGetRestaurantQuery } from '../../services/api'

import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

export type Rest = {
  id: number
  titulo: string
  destacdo?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <Hero />
        <RestaurantsList rests={restaurantes} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
