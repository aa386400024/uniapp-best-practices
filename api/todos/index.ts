// api/todos/index.ts

import { request, RequestOptions } from '@/utils/api/request'

// 一个示例API请求函数
export async function fetchTodos(): Promise<any> {
  const options: RequestOptions = {
    url: '/facts/random',
    method: 'GET',
  }
  const response = await request(options)
  return response.data
}

// 在此文件中定义更多与todos相关的API请求函数...
