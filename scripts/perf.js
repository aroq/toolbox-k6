import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export function setup() {
  // console.log(`K6_HOSTNAME = https://${__ENV.K6_HOSTNAME}/`);
}

export default function() {
  let res = http.get(`https://${__ENV.K6_HOSTNAME}/node/3`);
  sleep(1);
};
