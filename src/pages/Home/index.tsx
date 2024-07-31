import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import japonesa from '../../assets/images/rest.japones.png'
import italiana from '../../assets/images/rest.italiano.png'
// import Rest from '../../components/Models/Rest'
import { useEffect, useState } from 'react'

// const restaurantes: Rest[] = [
//   {
//     id: 1,
//     titulo: 'Hioki Sushi',
//     avaliacao: 4.9,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: ['Destaque da semana', 'Japonesa'],
//     image: japonesa
//   },
//   {
//     id: 2,
//     titulo: 'La Dolce Vita Trattoria',
//     avaliacao: 4.6,
//     descricao:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     infos: ['Italiana'],
//     image: italiana
//   },
//   {
//     id: 3,
//     titulo: 'Hioki Sushi',
//     avaliacao: 4.6,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: ['Japonesa'],
//     image: japonesa
//   },
//   {
//     id: 4,
//     titulo: 'Hioki Sushi',
//     avaliacao: 4.6,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: ['Japonesa'],
//     image: japonesa
//   },
//   {
//     id: 5,
//     titulo: 'Hioki Sushi',
//     avaliacao: 4.6,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: ['Japonesa'],
//     image: japonesa
//   },
//   {
//     id: 6,
//     titulo: 'Hioki Sushi',
//     avaliacao: 4.6,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: ['Japonesa'],
//     image: japonesa
//   }
// ]

export type Rest = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio?: {
    foto: string
    preco: string
    id: string
    nome: string
    descricao: string
    porcao: string
  }
}
const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Rest[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantsList rests={restaurantes} />
    </>
  )
}

export default Home
