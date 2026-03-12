import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Resp } from './models.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const argPort = (() => {
  const i = process.argv.indexOf('-p');
  return i !== -1 ? process.argv[i + 1] : undefined;
})();
const PORT = process.env.PORT || argPort || 3000;

let cache: { data: Resp | null; time: number } = { data: null, time: 0 };
const CACHE_TTL = 5 * 60 * 1000; // 5 分钟缓存

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/models', async (_req, res) => {
  const now = Date.now();
  const cacheExpired = !cache.data || now - cache.time > CACHE_TTL;

  if (!cacheExpired) {
    return res.json(cache.data);
  }

  try {
    const resp = await fetch(
      'https://openrouter.ai/api/frontend/models/find?order=newest'
    );
    if (!resp.ok) throw new Error(`API responded ${resp.status}`);

    cache.data = (await resp.json()) as Resp;
    cache.time = Date.now();
    return res.json(cache.data);
  } catch (err) {
    console.error('Fetch error:', (err as Error).message);

    if (cache.data) {
      res.set('X-Cache', 'STALE');
      return res.json(cache.data);
    }

    return res.status(502).json({ error: '获取模型数据失败' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
