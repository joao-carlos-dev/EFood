// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rest } from '../../pages/Home'
// import Prod from '../Models/Prod'
import Produtos from '../Produtos'
import { Container, List } from './styles'
// import { useEffect, useState } from 'react'

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
              />
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutoList
