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
      duration: '1m',
    }  
  },
};

export function positif() {
  http.get(`https://${__ENV.HOSTNAME}/health`);
}