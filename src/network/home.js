
import {request} from "./request";

export function getMultiData() {
  return request({
    method: 'get',
    url: '/home/multidata'
  })
}
