// document.querySelector('.stockForm').addEventListener('submit', function (e) {
//     e.preventDefault();
// const stockSymbol = document.querySelector('stockInput').value; //Hämta användarens input
// const apiKey ='https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo';
// const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${apiKey}`;

async function fetchData(stockSymbol) {
  const apiKey =
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo";
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${apiKey}`;

  try {
    const response = await fetch(url); // Vänta på att hämta API-data
    const data = await response.json(); // Konvertera till JSON

    console.log(data); // Debug: visa data i konsolen

}
