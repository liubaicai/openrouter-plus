import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Resp } from '../models.js';

let cache: { data: Resp | null; time: number } = { data: null, time: 0 };
const CACHE_TTL = 5 * 60 * 1000;

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const now = Date.now();
    if (!cache.data || now - cache.time > CACHE_TTL) {
      const resp = await fetch(
        'https://openrouter.ai/api/frontend/models/find?order=newest'
      );
      if (!resp.ok) throw new Error(`API responded ${resp.status}`);
      cache.data = (await resp.json()) as Resp;
      cache.time = now;
    }
    res.json(cache.data);
  } catch (err) {
    console.error('Fetch error:', (err as Error).message);
    res.status(502).json({ error: '获取模型数据失败' });
  }
}
