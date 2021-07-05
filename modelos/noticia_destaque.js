class NoticiaDestaque extends Noticia {
  constructor() {
    super(imagemDestaque);
    this._imagemDestaque = imagemDestaque;
  }

  mostrarNoticiaDestaque(){
    return this._imagemDestaque;
  }

  get mostrarDestaque() {
    return this.mostrarNoticiaDestaque();
  }