import { fetchNewsData } from "./news.js";
import { fetchWeather } from "./weather.js";

const apiKey = "";

const cityInput = document.querySelector(".cityInput");
const cityDisplay = document.querySelector(".cityDisplay");
const tempDisplay = document.querySelector(".tempDisplay");
const humidityDisplay = document.querySelector(".humidityDisplay");
const submitButton = document.querySelector(".submitButton");
const errorDisplay = document.querySelector(".errorDisplay");

// News Section
const newsTitleDisplay = document.querySelector(".newsTitleDisplay");
const newsDescription = document.querySelector(".newsDescriptionDisplay");
const newsLink = document.querySelector(".newsLink");
console.log(newsTitleDisplay);

// Getting news data from Sveriges Radio, single Article
// Because we are getting an promise object we have to wrap it in
// another async (loading from another script) to avoid racing
async function getNewsArticle() {
  // Getting the news
  const getNews = await fetchNewsData();

  // Printing on the web
  newsTitleDisplay.textContent = getNews.newsTitle;
  newsDescription.textContent = getNews.newsDescription;

  // Adding DOM element
  // Adding with attributes :D
  const link = document.createElement("a");
  // Lets add text to the link
  link.textContent = getNews.newsTitle;
  link.setAttribute("href", getNews.newsUrl);
  link.setAttribute("title", "News URL");
  link.setAttribute("target", "_blank");
  newsLink.appendChild(link);
}

// Getting Weather Data
// Printing it out to HTML
async function getWeather() {
  // Getting the news
  const getWeatherData = await fetchWeather();
  const weatherEmoji = document.querySelector(".weatherEmoji");

  // Displaying Weather data
  cityDisplay.textContent = "Helsingborg";
  tempDisplay.textContent = `${getWeatherData.current.temperature_2m} ${getWeatherData.current_units.temperature_2m}`;
  humidityDisplay.classList.add("bolder-text");
  humidityDisplay.textContent = `Luftfuktighet: ${getWeatherData.current.relative_humidity_2m} ${getWeatherData.current_units.relative_humidity_2m}`;
  weatherEmoji.textContent = weatherEmoji;
  weatherEmoji.classList.add("bigger-icons");
  // Natt: &#127764, Dag: &#127774

  if (getWeatherData.current.is_day === 1) {
    weatherEmoji.textContent = "☀️";
  } else {
    weatherEmoji.textContent = "🌙";
  }

  console.log(getWeatherData);
}

// Loading Data
// News
getNewsArticle();

// Weather
getWeather();
