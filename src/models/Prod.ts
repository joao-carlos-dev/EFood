class Prod {
  titulo: string
  descricao: string
  image: string
  id: number

  constructor(id: number, titulo: string, descricao: string, image: string) {
    this.id = id
    this.titulo = titulo
    this.image = image
    this.descricao = descricao
  }
}

export default Prod
