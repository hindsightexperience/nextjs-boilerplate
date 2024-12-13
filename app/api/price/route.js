// app/api/price/route.js

export async function GET() {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
