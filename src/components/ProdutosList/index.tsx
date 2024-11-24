/* eslint-disable react/jsx-key */

import * as S from './styles'

import Produtos from '../Produtos'
import Loader from '../Loader'

export type Props = {
  rests: Rest | undefined
  isLoading: boolean
}

const ProdutoList = ({ rests, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {rests && rests.cardapio.map((rest) => <Produtos pedido={rest} />)}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProdutoList
