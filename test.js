import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  let res = http.get('http://localhost:5000/');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
