import { useParams } from 'react-router-dom'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'

import ProdutoList from '../../components/ProdutosList'

import { Rest } from '../Home'
import { useGetBannerQuery, useGetProdutQuery } from '../../services/api'

export type Props = {
  rests: Rest[]
}

const Perfil = () => {
  const { id } = useParams()
  const { data: produto } = useGetProdutQuery(id!)
  const { data: banner } = useGetBannerQuery(id!)

  if (produto && banner) {
    return (
      <>
        <Header />
        <Apresentacao rests={banner} />
        <ProdutoList rests={produto} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Perfil
