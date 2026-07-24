export default function handler() {
  return new Response('ok', { status: 200, headers: { 'content-type': 'text/plain' } });
}
