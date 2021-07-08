let requestURL = "https://www.luizpicolo.com.br/api.json";
let XHM = new XMLHttpRequest();
XHM.open('GET', requestURL);
XHM.responseType = 'json';
XHM.send();

let elemento = document.getElementById('noticias');

XHM.onload = function () {
  let noticias = XHM.response.articles;
  let elemento1 = document.getElementById('noticias');
  let elemento2 = document.getElementById('destaque');

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