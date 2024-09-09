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
// import { Rest } from '../../pages/Home'

// export type Props = {
//   rests: Rest | undefined
// }

export type Props = {
  titulo: string
  descricao: string
  image: string
  porcao: string
  preco: number
}

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Produtos = ({ titulo, descricao, image, porcao, preco }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  // const addToCart = () => {
  //   dispatch(add(rests))
  // }
  return (
    <>
      <Card>
        <img src={image} alt="Foto restaurante" />
        <Titulo>{titulo}</Titulo>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <ButtonContainer onClick={() => setIsVisible(true)}>
          <Link to={''}>Adiconar ao carinho</Link>
        </ButtonContainer>
      </Card>
      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} />
          <InfosPrato>
            <NomePrato>{titulo}</NomePrato>
            <Prato>{descricao}</Prato>
            <br></br>
            <br></br>
            <Prato>{porcao}</Prato>
            <BotaoModel>
              Adicionar ao carrinho - {formataPreco(preco)}
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
