export async function crawl(startUrl, max, log) {
  const seen = new Set();
  const res = [];

  return new Promise(resolve => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    let count = 0;
    const next = () => {
      if (count >= max) {
        document.body.removeChild(iframe);
        resolve(res);
        return;
      }
      iframe.src = startUrl + '?page=' + count; // trigger navigation
      iframe.onload = () => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const base = new URL(startUrl).origin;
          // ambil semua link
          const links = [...doc.querySelectorAll('a[href]')]
            .map(a => new URL(a.href, base).href)
            .filter(h => h.startsWith(base) && !seen.has(h));
          for (const u of links.slice(0, 5)) {
            if (res.length >= max) break;
            seen.add(u);
            res.push(u);
            log(`[+] ${res.length}/${max} ${u}`, 'ok');
          }
        } catch {}
        count++;
        setTimeout(next, 500); // delay agar tidak kena rate-limit
      };
      iframe.onerror = () => {
        log(`[!] iframe error ${startUrl}`, 'warn');
        count++;
        setTimeout(next, 500);
      };
    };
    next();
  });
}
