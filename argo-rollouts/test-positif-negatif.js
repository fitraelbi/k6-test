import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    positif: {
      executor: 'constant-vus',
      exec: 'positif',
      vus: 1,
      duration: '3m',
    },
    negatif: {
        executor: 'constant-vus',
        exec: 'negatif',
        vus: 1,
        duration: '3m',
    },
  },
};

export function positif() {
  http.get('http://test2.fitraelbi.xyz/');
//   sleep(2)
}

export function negatif() {
  http.get('http://test2.fitraelbi.xyz/salah');
  sleep(60)
}