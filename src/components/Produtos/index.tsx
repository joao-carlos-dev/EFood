import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import {
  Card,
  Descricao,
  Prato,
  InfosPrato,
  Modal,
  ModalContent,
  NomePrato,
  Titulo,
  BotaoModel
} from './styles'
import fechar from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import { Produto } from '../../pages/Home'
// import { Rest } from '../../pages/Home'

// export type Props = {
//   rests: Rest | undefined
// }

export type Props = {
  pedido: Produto
}

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Produtos = ({ pedido }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(pedido))
  }
  return (
    <>
      <Card>
        <img src={pedido.image} alt="Foto restaurante" />
        <Titulo>{pedido.titulo}</Titulo>
        <Descricao>{getDescricao(pedido.descricao)}</Descricao>
        <ButtonContainer onClick={() => setIsVisible(true)}>
          <Link to={''}>Adiconar ao carinho</Link>
        </ButtonContainer>
      </Card>
      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={pedido.image} />
          <InfosPrato>
            <NomePrato>{pedido.titulo}</NomePrato>
            <Prato>{pedido.descricao}</Prato>
            <br></br>
            <br></br>
            <Prato>{pedido.porcao}</Prato>
            <BotaoModel onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(pedido.preco)}
            </BotaoModel>
          </InfosPrato>
          <div>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => setIsVisible(false)}
            />
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Produtos
