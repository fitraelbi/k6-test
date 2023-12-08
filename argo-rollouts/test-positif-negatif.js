import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    positif: {
      executor: 'constant-vus',
      exec: 'positif',
      vus: 1,
      duration: '5m',
    },
    // negatif: {
    //   executor: 'per-vu-iterations',
    //   exec: 'negatif',
    //   vus: 50,
    //   iterations: 100,
    //   startTime: '30s',
    //   maxDuration: '1m',
    // },
  },
};

export function positif() {
  http.get('http://test2.fitraelbi.xyz/');
  sleep(3)
}

// export function negatif() {
//   http.get('http://test2.fitraelbi.xyz/salah');
// }