import http from 'k6/http';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 1,
            timeUnit: '1s',
            duration: '1s',
            preAllocatedVUs: 200,
            maxVUs: 200,
        },
    },
};



export default function () {
    const amount = randomIntBetween(1000, 10000)
    const data = {
        "buyCurrency": "IDR",
        "sellCurrency": "SGD",
        "fixedSide": "buy",
        "amount": amount
    };

    const url = `${__ENV.HOSTNAME}`;
  
    // Using a JSON string as body
    const res = http.request('GET', url, data, {
      headers: { 
            'Content-Type': 'application/json',
            'Authorization': `${__ENV.AUTHORIZATION}`,
            'X-API-KEY': `${__ENV.X_API_KEY}`, 
        },
    });

    console.log(res);
    // console.log(res.json().json.name); // Bert
  
    // // Using an object as body, the headers will automatically include
    // // 'Content-Type: application/x-www-form-urlencoded'.
    // res = http.request('POST', url, data);
    // console.log(res.json().form.name); // Bert
  }
