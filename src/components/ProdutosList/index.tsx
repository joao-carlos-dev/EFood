/* eslint-disable react/jsx-key */
import { Rest } from '../../pages/Home'

import * as S from './styles'

import Produtos from '../Produtos'

export type Props = {
  rests: Rest | undefined
}

const ProdutoList = ({ rests }: Props) => {
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
