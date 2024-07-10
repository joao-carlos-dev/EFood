import Prod from '../../models/Prod'
import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  produ: Prod[]
}

const ProdutoList = ({ produ }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produ.map((prod) => (
          <Produtos
            key={prod.id}
            titulo={prod.titulo}
            descricao={prod.descricao}
            image={prod.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutoList
