let requestURL = "https://www.luizpicolo.com.br/api.json";
let XHM = new XMLHttpRequest();
XHM.open('GET', requestURL);
XHM.responseType = 'json';
XHM.send();

let elemento = document.getElementById('noticias');

XHM.onload = function () {
  let noticias = XHM.response;

  noticias.forEach(function(noticia) {
    let title = noticia.title;
    let publishedAt = noticia.publishedAt;
    let author = noticia.author;
    let description = noticia.description

    let n = new Noticia(title, publishedAt, author, description);

    elemento.insertAdjacentHTML('afterbegin', n.mostrar)
  })
}