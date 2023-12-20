import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  discardResponseBodies: true,
  insecureSkipTlsVerify: true,
  scenarios: {
    positif: {
      executor: 'constant-vus',
      exec: 'positif',
      vus: 1,
      duration: '5m',
    }  
  },
};

export function positif() {
  http.get('https://nodejs-id.wallex.ninja/health/');
  // sleep(2)
}