// https://open-meteo.com/en/docs
export async function fetchWeather() {
  // Settings
  const latitude = "52.52";
  const longitude = "13.419998";
  const apiOptions = "current=temperature_2m,relative_humidity_2m,is_day";

  // Basic URL API
  const baseApiLink =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&" +
    apiOptions;

  // Using Fetch to get URL Json Data
  const getWeather = await fetch(baseApiLink);

  // Check if we get status 200, if not it will throw an error below
  if (!getWeather.status == 200) {
    throw new Error("Failed to load Weather data");
  }

  // Converting data to Javascript stuff "nyckel: värde",  -> "nyckel" : "värde"
  const weatherData = getWeather.json();
  return weatherData;
}
