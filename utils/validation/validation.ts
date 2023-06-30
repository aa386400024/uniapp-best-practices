// 实现邮箱验证逻辑
export function validateEmail(email: string): boolean | void {
  // 假设验证逻辑为判断 email 是否符合正则表达式
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(email);

  if (!isValid) {
    // 如果不符合要求，可以进行一些逻辑处理，比如抛出异常或返回 false
    return false;
  }
}
