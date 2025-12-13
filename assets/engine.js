// tidak pernah fetch external lagi
const PAYLOAD_URL = '/payloads.txt';   // <- letakkan di root repo

class Engine {
  constructor() {
    this.payloads = [];
    this.stopFlag = false;
    this.results = [];
    this.stat = { crawled: 0, attacked: 0, found: 0 };
  }

  async init() {
    const txt = await fetch(PAYLOAD_URL).then(r => r.text());
    this.payloads = txt.split(/\r?\n/).filter(Boolean);
  }
  // ... sisanya sama persis seperti sebelumnya ...
}

export const engine = new Engine();
