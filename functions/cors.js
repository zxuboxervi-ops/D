exports.handler = async (event) => {
  const url = event.queryStringParameters.url;
  const r = await fetch(url, { method: event.httpMethod, body: event.body, headers: JSON.parse(event.headers['x-raw-headers'] || '{}') });
  const text = await r.text();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
    body: text
  };
};
