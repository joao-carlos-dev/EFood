/* eslint-disable react/jsx-key */

import Produtos from '../Produtos'
import Loader from '../Loader'

import * as S from './styles'

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
