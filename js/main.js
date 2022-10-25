let headerContainer = document.querySelector(".header-container");

/* 스크롤로 창을 올릴 경우, header의 색이 검정색이 됨 */
window.addEventListener("scroll", e => {
    if(window.pageYOffset > 0 ) {
        headerContainer.style.cssText = `
            background: black;
            transition: .4s;
        `;
    } else {
        headerContainer.style.cssText = `
            background-image: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.01)); 
            transition: .4s;
        `;
    }
});


/** 인기 컨텐츠 */
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "7a2ff151953c7c5d8c726df5e662e936";

let popularSlide = document.querySelector("#row-1 .slide-container");
let popularMovie = [];

requestPopularMovie();

async function requestPopularMovie() {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, 
        { method: 'GET',}
    );
    const data = await response.json();
    
    for(let movie of data.results) {
        popularMovie.push({ "id": movie.id, "name": movie.original_title, "poster": `${POSTER_URL}${movie.backdrop_path}` });
    }
    
    popularMovie = createImgPoster(popularMovie); //api로 받아온 영화 poster를 img태그에 넣어주는 함수
    appendToSlide(popularSlide, popularMovie); //img태그를 div로 한번 더 감싸서 carousel할 곳에 넣어줌.
}

function appendToSlide(slide, movies) {
    movies.forEach( (movie, index) => {
        let imgDiv = document.createElement('div');
        imgDiv.style.cssText = `
            width: 100%;
            padding: 0.2vw;
        `;
        imgDiv.className=`item-${index}`;
        movie.poster.style.cssText=`
            width: 15.3vw;
            border-radius: 3px 3px;
        `;

        imgDiv.append(movie.poster);
        slide.append(imgDiv);
    })
}

function createImgPoster(movies) {
    return [...movies.map(movie => {
        const movieThumnail = document.createElement('img');
        movieThumnail.src = movie.poster;
        movie.poster = movieThumnail;
        return movie;
    })];
}


/** 최신순 */
let latestMovie = [];
let latestSlide = document.querySelector("#row-2 .slide-container");

latestMovieRequest();

async function latestMovieRequest() {
    const response = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
        { method: 'GET', }  
    );

    const data = await response.json();

    for(let movie of data.results) {
        latestMovie.push({ "id": movie.id, "name": movie.original_title, "poster": `${POSTER_URL}${movie.backdrop_path}` });
    }

    latestMovie = createImgPoster(latestMovie);
    appendToSlide(latestSlide, latestMovie);
}


/** 상영 예정 */
let upcomingMovie = [];
let upcomingSlide = document.querySelector("#row-3 .slide-container");

upcomingMovieRequest();

async function upcomingMovieRequest() {
    const response = await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
        { method: 'GET', }
    );

    const data = await response.json();
    for(let movie of data.results) {
       upcomingMovie.push({ "id": movie.id, "name": movie.original_title, "poster": `${POSTER_URL}${movie.backdrop_path}` });
    }

    upcomingMovie = createImgPoster(upcomingMovie);
    appendToSlide(upcomingSlide, upcomingMovie);
}


/** carousel - 1*/
const prevBtn1 = document.querySelector('#prev-one');
const nextBtn1 = document.querySelector('#next-one');

prevBtn1.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-one');
    container.style.transform = `translateX(${1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';

    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.prepend(container.removeChild(container.childNodes[container.childNodes.length - 1]));
        }
    };
});

nextBtn1.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-one');
    container.style.transform = `translateX(${-1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';
    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.append(container.removeChild(container.childNodes[0]));
        }
    };
    
});


/** carousel - 2 */
const prevBtn2 = document.querySelector('#prev-two');
const nextBtn2 = document.querySelector('#next-two');

prevBtn2.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-two');
    container.style.transform = `translateX(${1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';
    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.prepend(container.removeChild(container.childNodes[container.childNodes.length - 1]));
        }
    };
});

nextBtn2.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-two');
    container.style.transform = `translateX(${-1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';
    
    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.append(container.removeChild(container.childNodes[0]));
        }
    };
    
});


/** carousel - 3 */

const prevBtn3 = document.querySelector('#prev-three');
const nextBtn3 = document.querySelector('#next-three');

prevBtn3.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-three');
    container.style.transform = `translateX(${1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';
    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.prepend(container.removeChild(container.childNodes[container.childNodes.length - 1]));
        }
    };
});

nextBtn3.addEventListener("click", e => {
    const container = document.querySelector('#slide-container-three');
    container.style.transform = `translateX(${-1 * (100 / 20 * 6)}%)`;
    container.style.transitionDuration = '.8s';
    
    container.ontransitionend = () => { 
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let i = 0; i < 6; i++) {
            container.append(container.removeChild(container.childNodes[0]));
        }
    };
    
});



/** search-tab */

const searchTab = document.querySelector(".search-tab");
const searchIcon = document.querySelector(".search-icon"); //padding없음
const searchDiv = document.querySelector('.search-div');
const searchInput = document.querySelector('.search-input');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', e => {
    searchBox.style.display = "none";
    searchDiv.prepend(searchIcon);
    searchDiv.style.cssText = `
        visibility: visible;
        border: 1px solid white;
        transform: scaleX(1);
        transition: .4s;
        width: 220px;
    `;

    searchInput.style.cssText = `
        margin: -3px 0 0 0;
        width: 130px;
    `;
});


const body = document.querySelector('body');
body.addEventListener ('click', e => {
    if(e.target == e.currentTarget.querySelector('.search-input') ||
        e.target == e.currentTarget.querySelector( '.search-icon') ||
        e.target == e.currentTarget.querySelector('.search-div')
    ) {
            return;
    }

    searchBox.style.display = "inline-block";
    searchTab.append(searchIcon);
    searchDiv.style.removeProperty("transform", "none");
    searchDiv.style.removeProperty("transition", "none");
    searchInput.style.removeProperty("margin", "none");

    searchDiv.style.cssText=`
        visibility: hidden;
        border: 0;
        width: 0;
    `;

    searchInput.style.cssText = `
        width: 0;
    `;
})