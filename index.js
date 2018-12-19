let baseUrl = 'https://api.nasa.gov/planetary/apod';
let key = '7RbyeJgB3EnMmi5Nb69N8eI9Bh28Gj3fnXQSH2gi';
let url;

const search = document.querySelector('.search');
const pictureDate = document.querySelector('.date');
const searchBar = document.querySelector('form');
const subButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

const results = document.querySelector('.results');

subButton.addEventListener('click', fetchPicture);
resetButton.addEventListener('click', reset);

function fetchPicture(e) {
    e.preventDefault();
    url = `${baseUrl}?api_key=${key}`;
    console.log('URL: ', url);
    if(pictureDate.value !== ''){
        console.log(pictureDate.value)
        url += '&date=' + pictureDate.value;
        console.log(url);
    };

    fetch(url).then(result => {
        return result.json();
    })
    .then(json => {
        console.log(json);
        displayPicture(json);
    });
}
function displayPicture(json){
    
    let picture = json.url;
    let heading = json.title;
    let desc = json.explanation;

    let img = document.createElement('img');
    let title = document.createElement('h1');
    let para = document.createElement('p');

    img.src = picture;
    title.innerText = heading;
    para.innerText = desc;

    results.prepend(para);
    results.prepend(title);
    results.prepend(img);
}

function reset(){
    onclick.reset();
}