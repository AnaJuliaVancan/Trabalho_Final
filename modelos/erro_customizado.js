class ErroCustomizado extends Error{
  constructor(mensage){
    super(mensage);
    this.name = "ErradoError"
  }
}