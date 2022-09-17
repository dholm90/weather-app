import * as API from '../functions/api';

// HTML Structure
async function load() {
  const body = document.querySelector('body');
  body.innerHTML += (header() + search() + today(await API.callApi('kitchener')) + footer());
  initSearch();
}

function header() {
  return `
    <header>
      <h1>weather.io</h1>
    </header>`;
}

function search() {
  return `
    <form action="#">
      <input type="text" name="search" id="search-bar">
      <button type="submit" id="search-btn">Search</button>
    </form>
    <section class="today">`;
}

function today(data) {
  return `
      <article class="left">
        <h2 class="weather">${data.weather}</h2>
        <h3 class="location">${data.location}</h3>
        <p class="date">${data.date}</p>
        <p class="time">${data.time}</p>
        <h2 class="temp">${data.tempC}<span>&#176;</span></h2>
      </article>
      <article class="right">
        <p class="feels-like-label">Feels Like</p>
        <p class="feels-like-data">${data.feelsLikeC}<span>&#176;</span></p>
        <p class="humidity-label">Humidity</p>
        <p class="humidity-data">${data.humidity}%</p>
        <p class="wind-label">Wind Speed</p>
        <p class="wind-data">${data.windKmH} km/hr</p>
      </article>
    `;
}

function footer() {
  return '</section><footer><h1>weather.io</h1></footer>';
}

// Helper Functions
function initSearch() {
  const button = document.querySelector('#search-btn');
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  button.addEventListener('click', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  getWeather();
}

async function getWeather() {
  const input = document.querySelector('#search-bar');
  const userInput = input.value;
  const main = document.querySelector('.today');
  let newWeather = today(await API.callApi(userInput));
  main.innerHTML = newWeather;
}

export { load };
