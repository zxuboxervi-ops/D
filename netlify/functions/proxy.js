exports.handler = async (event) => {
  const url = event.queryStringParameters.url;
  if (!url) return { statusCode: 400, body: 'need ?url=' };

  const r = await fetch(url, {
    method: event.httpMethod,
    headers: JSON.parse(event.headers['x-raw-headers'] || '{}'),
    body: event.body
  });
  const text = await r.text();

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
    body: text
  };
};
