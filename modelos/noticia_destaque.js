class NoticiaDestaque extends Noticia {
  constructor() {
    super(imagemDestaque);
    this._imagemDestaque = imagemDestaque;
  }

  mostrarNoticiaDestaque(_imagemDestaque) {
    if (_imagemDestaque != " ") {

      return `
        <div>${this._imagemDestaque}</div>
      `;
      //return this._imagemDestaque;
    } else {
      throw new ErroCustomizado("Algo está vazio!Cheque se a imagem está preenchida");
    }
  }

  get mostrarDestaque() {
     try {
      return this.mostrarNoticiaDestaque();
    } catch (erro) {
      return erro.stack
    } finally {
      console.log("Código finalizado com sucesso!")
    }
  }
}