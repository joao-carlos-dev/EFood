import { useEffect, useState } from 'react'
import { Rest } from '../../pages/Home'
// import Prod from '../Models/Prod'
import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  rests: Rest[]
}

const ProdutoList = ({ rests }: Props) => {
  // const formataPreco = (preco: number) => {
  //   return new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL'
  //   }).format(preco)
  // }

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
