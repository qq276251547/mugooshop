
import {request} from "./request";

/**
 * 请求Hone首页轮播图和推荐的数据
 */
export function getMultiData() {
  return request({
    method: 'get',
    url: '/home/multidata'
  })
}

/**
 * 请求Home首页商品信息数据（'流行', '新款', '精选'）
 */
export function getGoodsData(type, page) {
  return request({
    method: 'get',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
