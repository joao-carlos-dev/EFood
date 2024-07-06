class Rest {
  titulo: string
  descricao: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.titulo = titulo
    this.image = image
    this.infos = infos
    this.descricao = descricao
  }
}

export default Rest
