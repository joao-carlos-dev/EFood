import { useParams } from 'react-router-dom'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'

import ProdutoList from '../../components/ProdutosList'

import { useGetBannerQuery, useGetProdutQuery } from '../../services/api'

export type Props = {
  rests: Rest[]
}

type RestParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestParams
  const { data: produto, isLoading: isLoadingProduto } = useGetProdutQuery(id)
  const { data: banner, isLoading: isLoadingBanner } = useGetBannerQuery(id)

  return (
    <>
      <Header />
      <Apresentacao rests={banner} isLoading={isLoadingBanner} />
      <ProdutoList rests={produto} isLoading={isLoadingProduto} />
    </>
  )
}

export default Perfil
