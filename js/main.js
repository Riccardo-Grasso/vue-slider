Vue.config.devtools = true;

const carosello = new Vue({

    el: "#root",
    data: {
        imgList: [
            {
                url: 'img/01.jpg',
                titolo: 'Svezia',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/02.jpg',
                titolo: 'Svizzera',
                descrizione: 'Lorem ipsum'
            },
            {
                url: 'img/03.jpg',
                titolo: 'Gran Bretagna',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url: 'img/04.jpg',
                titolo: 'Germania',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url: 'img/05.jpg',
                titolo: 'Paradise',
                descrizione: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],
        currentImage: 0,
    },
    methods: {
        imgPrecedente() {
            let indice = this.currentImage - 1;
            if (indice < 0) {
                indice = this.imgList.length - 1;
            }
            this.currentImage = indice;
        },

        imgSuccessiva() {
            let indice = this.currentImage + 1;
            if (indice > this.imgList.length - 1) {
                indice = 0;
            }
            this.currentImage = indice;

        }
    }
});

/* //SELEZIONO LA COLONNA CON IMG GRANDE
const imageBig = document.querySelector(".image-big");
imageBig.classList.add("image-big-container");

const imageList = document.querySelector(".row .image-list");
imageList.classList.add("image-list-container", "d-flex", "flex-column");

const titleList = document.querySelector(".my-titolo");

const textList = document.querySelector(".my-testo"); */

//INIZIALIZZO INDICE
/* let currentIndex = 0;
 */
//INSERISCO IMG NEL CONTENITORE E METTO CLASSE ACTIVE
/* for (let i = 0; i < items.length; i++) {
    const currentImg = items[i];
    const currentTitle = title[i];
    const currentText = text[i];

    let classeActive = "";

    if (i === currentIndex) {
        classeActive = "active";
    }

    const img = `<img class="${classeActive}" src="${currentImg}" alt="immagine ${i}">`;
    const titolo = `<h2 class="${classeActive}">${currentTitle}</h2>`;
    const testo = `<p class="${classeActive}">${currentText}</p>`;

    imageBig.innerHTML += img;
    imageList.innerHTML += img;
    titleList.innerHTML += titolo;
    textList.innerHTML += testo;

    console.log(currentTitle);
    console.log(currentText);
} */



//FRECCE 
/* const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");

arrowBottom.addEventListener("click", function () {
    const imgActiveRight = imageBig.querySelector(".active");
    const imgActive = imageList.querySelector(".active");
    const titleActive = titleList.querySelector(".active");
    const textActive = textList.querySelector(".active");

    imgActive.classList.remove("active");
    imgActiveRight.classList.remove("active");
    titleActive.classList.remove("active");
    textActive.classList.remove("active");

    currentIndex++;

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    const imgTags = imageList.querySelectorAll("img");
    const imgTagsBig = imageBig.querySelectorAll("img");
    const titleTags = titleList.querySelectorAll("h2");
    const textTags = textList.querySelectorAll("p");

    const newActiveImage = imgTags[currentIndex];
    const newActiveImageBig = imgTagsBig[currentIndex];
    const newActiveTitle = titleTags[currentIndex];
    const newActiveText = textTags[currentIndex];

    newActiveImage.classList.add("active");
    newActiveImageBig.classList.add("active");
    newActiveTitle.classList.add("active");
    newActiveText.classList.add("active");
});


arrowTop.addEventListener("click", function () {

    const imgActiveRight = imageBig.querySelector(".active");
    const imgActive = imageList.querySelector(".active");
    const titleActive = titleList.querySelector(".active");
    const textActive = textList.querySelector(".active");

    imgActive.classList.remove("active");
    imgActiveRight.classList.remove("active");
    titleActive.classList.remove("active");
    textActive.classList.remove("active");

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const imgTags = imageList.querySelectorAll("img");
    const imgTagsBig = imageBig.querySelectorAll("img");
    const titleTags = titleList.querySelectorAll("h2");
    const textTags = textList.querySelectorAll("p");

    const newActiveImage = imgTags[currentIndex];
    const newActiveImageBig = imgTagsBig[currentIndex];
    const newActiveTitle = titleTags[currentIndex];
    const newActiveText = textTags[currentIndex];

    newActiveImage.classList.add("active");
    newActiveImageBig.classList.add("active");
    newActiveTitle.classList.add("active");
    newActiveText.classList.add("active");
}); */