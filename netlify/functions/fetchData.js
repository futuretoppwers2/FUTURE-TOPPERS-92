export async function handler(event, context) {
  const tab = event.queryStringParameters.tab || "live";
  const apiUrl = `https://automation9thphp.vercel.app/api/api.php?token=my_secret_key123&view=${tab}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
