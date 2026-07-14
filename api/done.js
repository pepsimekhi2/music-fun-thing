export default function handler(req, res) {
  const { code, error, state } = req.query;
  const params = new URLSearchParams();
  if (code) params.set('code', code);
  if (error) params.set('error', error);
  if (state) params.set('state', state);
  res.writeHead(302, { Location: '/?' + params.toString() });
  res.end();
}
