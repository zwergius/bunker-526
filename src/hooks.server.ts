import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', 'da'),
  });
}) satisfies Handle;
