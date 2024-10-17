// https://api.sr.se/api/documentation/v2/index.html

export async function fetchNewsData() {
  // Getting news data using Fetch
  // The data is in JSON format
  const getNews = await fetch(
    "http://api.sr.se/api/v2/news/?format=json&size=1&page=1"
  );

  // Simple Error handling incase
  if (!getNews.ok) {
    throw new Error("Failed to fetch user data");
  }

  // Getting the Data and converting it into Javascript readable
  const newsData = await getNews.json();

  // Saving single article in new Object for later usage
  const newsIndex = 2;
  const singleNews = {
    newsTitle: newsData["programs"][newsIndex]["name"],
    newsDescription: newsData["programs"][newsIndex]["description"],
    newsUrl: newsData["programs"][newsIndex]["programurl"],
  };

  return singleNews;
}
