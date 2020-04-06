
import {request} from "./request";

export function getGoodDetail(iid) {
  return request({
    method: 'get',
    url: '/detail',
    params: {
      iid,
    }
  })
}
