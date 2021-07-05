class Noticia{
  constructor(title, publishedAt, author, description){
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._description = description;
  }
}

get mostar() {
  try {
      return this.mostrarNoticia();
    } catch (erro) {
      return erro.stack
    } finally {
      console.log("Código finalizado com sucesso!")
    }
  }

mostrarNoticia(){
  if (this._titulo != " " && this._resumo != " " && this._texto != " ") {

      return `
        <h1>${this._titulo}</h1>
        <div>${this._dataPubli}</div>
        <div>${this._resumo}</div><br>
        <div>${this._texto}</div>
      `;

      //return this._titulo + "\n" + "\n" + this._dataPubli + "\n" + this._resumo + "\n\n" + this._texto;
    } else {
      throw new ErroCustomizado("Algo está vazio!Cheque se titulo, resumo ou texto estão preenchidos!!!");
    }
  }
}