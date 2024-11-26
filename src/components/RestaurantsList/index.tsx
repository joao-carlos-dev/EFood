import Loader from '../Loader'

import Restaurants from '../Restaurants'

import * as S from './styles'

export type Props = {
  rests?: Rest[]
  isLoading: boolean
}

const RestaurantsList = ({ rests, isLoading }: Props) => {
  const getGameTags = (rest: Rest) => {
    const tags = []

    if (rest.tipo) {
      tags.push(rest.tipo)
    }

    if (rest.destacdo) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {rests &&
            rests.map((rests) => (
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
