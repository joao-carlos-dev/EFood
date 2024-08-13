// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rest } from '../../pages/Home'
// import Prod from '../Models/Prod'
import Produtos from '../Produtos'
import { Container, List } from './styles'
// import { useEffect, useState } from 'react'

export type Props = {
  rests: Rest[]
}

const ProdutoList = ({ rests }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {rests.map((rests) => (
            <Produtos
              key={rests.id}
              titulo={rests.titulo}
              descricao={rests.descricao}
              image={rests.capa}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutoList
