// process.stdin.pipe(process.stdout);

import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;
    setTimeout(() => {
      this.push(String(i));
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
