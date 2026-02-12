import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { SmartRouter } from 'hono/router/smart-router';
import { RegExpRouter } from 'hono/router/reg-exp-router';
import { TrieRouter } from 'hono/router/trie-router';

const app = new Hono();

/** 
app.use(cors({
  origin: '*',
}))
*/

app.use('/api/*', cors());

//app.get(somePath, handler)
app.get('/api/hello', (context) => context.json({ message: 'GEMS API' }));

serve({
  fetch: app.fetch,
  port: 3001,
}, (info) => {
  console.log('🚀 Hono Server läuft auf http://localhost:3001');
}
);