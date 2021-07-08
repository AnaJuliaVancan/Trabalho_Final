let requestURL = "https://www.luizpicolo.com.br/api.json";
let XHM = new XMLHttpRequest();
XHM.open('GET', requestURL);
XHM.responseType = 'json';
XHM.send();

let elemento = document.getElementById('noticias');

XHM.onload = function () {
  let noticias = XHM.response;

  noticias.forEarch(function (noticia) {
    let title = noticia.title;
    let publishedAt = noticia.publishedAt;
    let author = noticia.author;
    let description = noticia.description;
    let url = noticia.url;

    let n = new Noticia(title, publishedAt, author, description, url);

    elemento.insertAdjacentHTML('afterbegin', n.mostrar)
  })
}