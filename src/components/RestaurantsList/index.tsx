import { Rest } from '../../pages/Home'
import Restaurants from '../Restaurants'
import { Container, List } from './styles'

export type Props = {
  rests: Rest[]
}

const RestaurantsList = ({ rests }: Props) => {
  const getGameTags = (rest: Rest) => {
    const tags = []

    if (rest.tipo) {
      tags.push(rest.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {rests.map((rests) => (
            <Restaurants
              key={rests.id}
              id={rests.id}
              titulo={rests.titulo}
              descricao={rests.descricao}
              image={rests.capa}
              avaliacao={rests.avaliacao}
              infos={getGameTags(rests)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
