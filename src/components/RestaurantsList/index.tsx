import Restaurants from '../Restaurants'
import { Container, List } from './styles'

const RestaurantsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />

        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />

        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />

        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />

        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />

        <Restaurants
          titulo="Hioki Sushi "
          descricao="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Italiana']}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
