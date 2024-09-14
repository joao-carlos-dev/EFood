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
          {rests &&
            rests.cardapio.map((rests) => (
              <Produtos
                key={rests.id}
                titulo={rests.nome}
                descricao={rests.descricao}
                image={rests.foto}
                porcao={rests.porcao}
                preco={rests.preco}
              />
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutoList
