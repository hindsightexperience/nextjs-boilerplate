export default async function handler(req, res) {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
    const data = await response.json();
    res.status(200).json({ price: data.bpi.USD.rate_float });
  }
  