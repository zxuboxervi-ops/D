export async function crawl(startUrl, max, log) {
  const seen = new Set();
  const queue = [startUrl];
  const res = [];

  while (queue.length && res.length < max) {
    const url = queue.shift();
    if (seen.has(url)) continue;
    seen.add(url);
    try {
      const html = await fetch(url).then(r => r.text());
      res.push(url);
      log(`[+] crawl ${res.length}/${max} ${url}`, 'ok');
      // regex semi-kasual cari href
      const matches = html.matchAll(/href=["']([^"']+)["']/gi);
      for (const m of matches) {
        try {
          const u = new URL(m[1], url).href;
          if (u.startsWith(startUrl) && !seen.has(u)) queue.push(u);
        } catch {}
      }
    } catch (e) {
      log(`[!] gagal crawl ${url} : ${e.message}`, 'warn');
    }
  }
  return res;
}
