import { useParams } from 'react-router-dom'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'
// import Prod from '../../components/Models/Prod'
import ProdutoList from '../../components/ProdutosList'
import { useEffect, useState } from 'react'
import { Rest } from '../Home'

// const restaurantes: Rest[] = []

export type Props = {
  rests: Rest[]
}

const Perfil = () => {
  const { id } = useParams()
  const [produto, setProduto] = useState<Rest[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProduto(res))
  }, [id])
  return (
    <>
      <Header />
      <Apresentacao />
      <ProdutoList rests={produto} />
    </>
  )
}

export default Perfil
