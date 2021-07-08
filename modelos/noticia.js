class Noticia {
  constructor(title, publishedAt, author, description, url, content) {
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._description = description;
    this._url = url;
  }
}

get mostrarNoticia() {
  try {
    return this.mostrarNoticia();
  } catch (erro) {
    return erro.stack
  } finally {
    console.log("Código finalizado com sucesso!")
  }
}

mostrarNoticia(){
  if (this._title != " " && this._author != " " && this._description != " ") {

    return `
        <h1>${this._title}</h1>
        <div>${this._publishedAt}</div>
        <div>${this._author}</div><br>
        <div>${this._description}</div>
        <div>${this._content}</div>
      `;

  } else {
    throw new ErroCustomizado("Algo está vazio!Cheque se titulo, resumo ou texto estão preenchidos!!!");
  }
}
}