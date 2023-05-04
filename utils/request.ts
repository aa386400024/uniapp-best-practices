// utils/request.ts

import { BASE_URL, TIMEOUT } from '@/config/env'
import { CUSTOM_HEADERS } from '@/config/headers'
import { CancelToken } from '@/utils/cancel-token'
import { responseInterceptor, requestInterceptor } from '@/api/interceptors'

interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  headers?: Record<string, string>
  timeout?: number
  cancelToken?: CancelToken
}

function request(options: RequestOptions): Promise<UniApp.RequestSuccessCallbackResult> {
  const { url, method = 'GET', data, headers, timeout = TIMEOUT, cancelToken } = requestInterceptor(options)

  return new Promise((resolve, reject) => {
    const requestTask = uni.request({
      url: BASE_URL + url,
      method,
      data,
      header: { ...CUSTOM_HEADERS, ...headers },
      timeout,
      success: async (response) => {
        try {
          const processedResponse = await responseInterceptor(response)
          resolve(processedResponse)
        } catch (error) {
          reject(error)
        }
      },
      fail: (error) => {
        reject(error)
      },
    })

    if (cancelToken) {
      cancelToken.cancel = (reason) => {
        requestTask.abort()
        reject(reason)
      }
    }
  })
}

export { request, RequestOptions }
