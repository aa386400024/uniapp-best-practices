export async function responseInterceptor(
  response: UniApp.RequestSuccessCallbackResult
): Promise<UniApp.RequestSuccessCallbackResult> {
  // 在这里处理响应拦截逻辑
  if (response.statusCode >= 400) {
    // 在这里处理错误响应
    throw new Error('请求失败')
  }
  return response
}
