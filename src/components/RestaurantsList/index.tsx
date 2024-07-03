import Restaurants from '../Restaurants'
import { Container, List } from './styles'

const RestaurantsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurants />
        <Restaurants />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
