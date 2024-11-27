import Loader from '../Loader'

import Restaurants from '../Restaurants'

import * as S from './styles'

export type Props = {
  rests?: Rest[]
  isLoading: boolean
}

const RestaurantsList = ({ rests, isLoading }: Props) => {
  const getGameTags = (rests: Rest) => {
    const tags = []

    if (rests.tipo) {
      tags.push(rests.tipo)
    }

    if (rests.destacado) {
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
