import http from 'k6/http';

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 100,
            timeUnit: '1s',
            duration: '5s',
            preAllocatedVUs: 200,
            maxVUs: 200,
        },
    },
};

export default function () {
  const url = `${__ENV.HOSTNAME}`;
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${__ENV.AUTHORIZATION}`,
      'X-API-KEY': `${__ENV.X_API_KEY}`,
    },
  };

  http.get(url, params);
}
