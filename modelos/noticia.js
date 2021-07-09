class Noticia {
  constructor(title, publishedAt, author, description, url) {
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._description = description;
    this._url = url;
  }

  get mostrarNoticia() {
    try {
      return this.aparecerNoticia();
    } catch (erro) {
      return erro.stack
    } finally {
      console.log("Código finalizado com sucesso!")
    }
  }

  aparecerNoticia() {
    if (this._title != " " && this._author != " " && this._description != " " && this._publishedAt != " " && this._url != " ") {
      return `
            <div class="row p-3">
               <div class="accordion" id="metodos" style="bacground-color">
                    <div class="accordion-item">
                     <h2 class="accordion-header">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                         data-bs-target="#item1">
                              <h3 class="font-family-base" style="font-family: serif"><a href="${this._url}">${this._title}</a></h3>
                         </button>
                     </h2>
                     <div id="item1" class="accordion-collapse collapse" data-bs-parent="#metodos">
                         <div class="accordion-body">
                               <div style="font-family: arial">${this._publishedAt}</div>
                               <div style="font-family: arial">${this._author}</div><br>
                               <div style="font-family: arial">${this._description}</div>
                         </div>
                     </div>
                 </div>
              </div>
            </div>
      `
    } else {
      throw new ErroCustomizado("Algo está vazio!Cheque se titulo, resumo ou texto estão preenchidos!!!");
    }
  }
}