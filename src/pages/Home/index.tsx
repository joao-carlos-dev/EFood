import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantQuery } from '../../services/api'

export type Rest = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: string
    nome: string
    descricao: string
    porcao: string
  }[]
}

export type Produto = {
  titulo: string
  descricao: string
  image: string
  porcao: string
  preco: number
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantQuery()

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
