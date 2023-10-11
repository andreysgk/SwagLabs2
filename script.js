import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '5s',
  };

// export default function () {
//   http.get('https://www.saucedemo.com/');
//   sleep(1);
// }

export default function () {
    let res = http.get("https://k6-http.grafana.fun/get");
    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
  }