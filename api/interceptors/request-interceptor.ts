
import { RequestOptions } from '@/utils/api/request'

export function requestInterceptor(config: RequestOptions): RequestOptions {
  // 在这里处理请求拦截逻辑
  // 例如：为每个请求添加一个认证令牌
  const token = uni.getStorageSync('token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config
}
