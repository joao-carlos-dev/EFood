import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import { Card, Descricao, Titulo } from './styles'
// import { useEffect, useState } from 'react'
// import { Rest } from '../../pages/Home'

export type Props = {
  titulo: string
  descricao: string
  image: string
}

const Produtos = ({ titulo, descricao, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <ButtonContainer>
        <Link to="#">Adiconar ao carinho</Link>
      </ButtonContainer>
    </Card>
  )
}

export default Produtos
