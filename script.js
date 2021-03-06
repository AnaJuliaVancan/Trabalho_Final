let requestURL = "https://www.luizpicolo.com.br/api.json";
let XHM = new XMLHttpRequest();
XHM.open('GET', requestURL);
XHM.responseType = 'json';
XHM.send();

XHM.onload = function () {
  let noticias = XHM.response.articles;
  let elemento1 = document.getElementById('noticias');
  let elemento2 = document.getElementById('destaque');


  let destaque = new NoticiaDestaque(noticias[0].urlToImage, noticias[0].title, noticias[0].publishedAt, noticias[0].author, noticias[0].description, noticias[0].url);
  elemento2.insertAdjacentHTML('afterbegin', destaque.mostrarDestaque);

  noticias.shift();

  noticias.forEach(function (noticia) {
    let title = noticia.title;
    let publishedAt = noticia.publishedAt;
    let author = noticia.author;
    let description = noticia.description;
    let url = noticia.url;

    let n = new Noticia(title, publishedAt, author, description, url);

    elemento1.insertAdjacentHTML('afterbegin', n.mostrarNoticia)
  })
}