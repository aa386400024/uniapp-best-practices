/**
 * 防抖函数，用于限制函数的执行频率，在指定的延迟时间内只允许最后一次调用生效
 * @param fn 需要进行防抖处理的函数
 * @param delay 延迟时间，单位为毫秒
 * @returns 经过防抖处理后的函数
 */
export function debounce<T extends (...args : any[]) => any>(fn : T, delay : number) : (...args : Parameters<T>) => void {
	// 用于保存计时器的 ID
	let timeoutId : number | undefined;

	// 用于保存函数的执行上下文
	let context : any;

	return function (this : any, ...args : Parameters<T>) : void {
		// 清除之前的计时器
		clearTimeout(timeoutId);

		// 更新执行上下文
		context = this;

		// 设置新的计时器，延迟执行函数
		timeoutId = setTimeout(() => {
			// 在延迟时间结束后，以保存的上下文和参数调用原始函数
			fn.apply(context, args);
		}, delay);
	};
}