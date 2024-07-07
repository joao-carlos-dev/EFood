class Rest {
  titulo: string
  avaliacao: number
  descricao: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    titulo: string,
    avaliacao: number,
    descricao: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.image = image
    this.infos = infos
    this.descricao = descricao
  }
}

export default Rest
