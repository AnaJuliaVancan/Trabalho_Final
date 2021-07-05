class Noticia{
  constructor(title, publishedAt, author, description){
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._description = description;
  }
}

get mostar() {
  return this.mostarNoticia();
}

mostrarNoticia(){
  return this._title + "\n" + this._publishedA + "\n" + this._author + "\n\n" + this._description;
}