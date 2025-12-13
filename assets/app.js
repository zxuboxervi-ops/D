import { crawl } from './crawler.js';
import { engine } from './engine.js';

const $ = q => document.querySelector(q);
const log = (txt, cls = '') => {
  const l = $('#logs');
  l.innerHTML += `<span class="${cls}">${txt}\n</span>`;
  l.scrollTop = l.scrollHeight;
};

let running = false;

$('#start').onclick = async () => {
  if (running) return;
  running = true;
  $('#start').disabled = true;
  $('#stop').disabled = false;
  $('#logs').innerHTML = '';

  const url = $('#url').value.trim();
  const max = +$('#max').value;
  const delay = +$('#delay').value;
  const collab = $('#collab').value.trim();

  log('[*] Mulai crawling…');
  const urls = await crawl(url, max, log);
  log(`[+] Dapat ${urls.length} URL`);

  log('[*] Mulai serangan…');
  await engine({ urls, delay, collab, log, onStat });

  log('[+] Selesai.');
  running = false;
  $('#start').disabled = false;
  $('#stop').disabled = true;
};

$('#stop').onclick = () => { running = false; engine.stop(); };

function onStat(stat) {
  $('#crawl').textContent = stat.crawled;
  $('#total').textContent = stat.attacked;
  $('#found').textContent = stat.found;
}

$('#export').onclick = () => {
  const rows = [['URL','Payload','Method','Status','Note']];
  engine.results.forEach(r => rows.push([r.url, r.p, r.m, r.s, r.n]));
  const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'autoxss-report.csv';
  a.click();
};
