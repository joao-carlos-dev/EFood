declare type Rest = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

declare type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}
