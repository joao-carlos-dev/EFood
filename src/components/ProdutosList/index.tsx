/* eslint-disable react/jsx-key */
import { Rest } from '../../pages/Home'

import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  rests: Rest | undefined
}

const ProdutoList = ({ rests }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {rests && rests.cardapio.map((rest) => <Produtos pedido={rest} />)}
        </List>
      </div>
    </Container>
  )
}

export default ProdutoList
