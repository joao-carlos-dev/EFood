import { Rest } from '../../pages/Home'

import Restaurants from '../Restaurants'

import * as S from './styles'

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
    <S.Container>
      <div className="container">
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default RestaurantsList
