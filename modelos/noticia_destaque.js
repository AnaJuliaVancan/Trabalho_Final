class NoticiaDestaque extends Noticia {
  constructor(urlToImage, title, publishedAt, author, description, url) {
    super(title, publishedAt, author, description, url);
    this._urlToImage = urlToImage;
  }

  mostrarNoticiaDestaque(_urlToImage) {
    if (_urlToImage != " ") {

      return `
      <div class="row p-5 text-center">
        <img src="${this._urlToImage}"></img>
        </div>

      <div class="row p-3 mt-3" style="background-color: white;">
        <div class="titulo_destaque text-center"><a href="${this._url}">${this._title}</a></div>
        <div class="data_destaque">${this._publishedAt}</div>
        <div class="ator_destaque">${this._author}</div><br><br>
        <div class="descricao_destaque">${this._description}</div>
      </div>
      `;

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