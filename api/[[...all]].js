import server from '../dist/server/server.js';

export default async function handler(req) {
  // Forward the incoming Request to the built server's fetch handler.
  // The built server exports a default object with a `fetch(request, env, ctx)` method.
  try {
    const response = await server.fetch(req, undefined, undefined);
    return response;
  } catch (err) {
    // Return a minimal 500 response on failure to avoid Vercel-level errors.
    console.error('Edge handler error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
