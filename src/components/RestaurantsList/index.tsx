import Rest from '../../models/Rest'
import Restaurants from '../Restaurants'
import { Container, List } from './styles'

export type Props = {
  rests: Rest[]
}

const RestaurantsList = ({ rests }: Props) => (
  <Container>
    <div className="container">
      <List>
        {rests.map((rest) => (
          <Restaurants
            key={rest.id}
            titulo={rest.titulo}
            descricao={rest.descricao}
            image={rest.image}
            infos={rest.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
