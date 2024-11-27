import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getDescription, parseToBrl } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import iconClose from '../../assets/images/close.png'

import { ButtonContainer } from '../Button/styles'
import * as S from './styles'

export type Props = {
  pedido: Produto
}

const Produtos = ({ pedido }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(pedido))
    dispatch(open())
    setIsVisible(false)
  }

  return (
    <>
      <S.Card>
        <img src={pedido.foto} alt="Foto restaurante" />
        <S.Title>{pedido.nome}</S.Title>
        <S.Description>{getDescription(pedido.descricao)}</S.Description>
        <ButtonContainer onClick={() => setIsVisible(true)}>
          <Link to={''}>Adiconar ao carinho</Link>
        </ButtonContainer>
      </S.Card>
      <S.Modal className={isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img src={pedido.foto} />
          <S.InfosDish>
            <S.NameDish>{pedido.nome}</S.NameDish>
            <S.Dish>{pedido.descricao}</S.Dish>
            <br></br>
            <br></br>
            <S.Dish>{pedido.porcao}</S.Dish>
            <S.ButtonModel onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(pedido.preco)}
            </S.ButtonModel>
          </S.InfosDish>
          <div>
            <img
              src={iconClose}
              alt="Ícone de fechar"
              onClick={() => setIsVisible(false)}
            />
          </div>
        </S.ModalContent>

        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Produtos
