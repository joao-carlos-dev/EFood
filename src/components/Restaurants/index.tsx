import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Restaurants = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <div>
      <Titulo>nome do restaurante</Titulo>
      <Tag>destaque</Tag>
      <Tag>categoria</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
        distinctio et culpa eum nobis repudiandae dignissimos aspernatur, minus
        suscipit dicta vel, cum quo officia eligendi dolores placeat atque
        nulla! Optio?
      </Descricao>
      <ButtonContainer>saiba mais</ButtonContainer>
    </div>
  </Card>
)

export default Restaurants
