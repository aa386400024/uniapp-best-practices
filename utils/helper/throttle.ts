/**
 * 节流函数，用于限制函数的调用频率，在指定的时间间隔内只允许函数执行一次
 * @param fn 需要进行节流的函数
 * @param delay 时间间隔，单位为毫秒
 * @returns 经过节流处理后的函数
 */
export function throttle(fn : Function, delay : number) : Function {
	let lastTime = 0; // 上次执行函数的时间戳

	return function (this : any, ...args : any[]) : void {
		const now = Date.now(); // 当前时间戳

		if (now - lastTime >= delay) {
			// 如果距离上次执行函数的时间已经超过指定的时间间隔
			fn.apply(this, args); // 执行函数
			lastTime = now; // 更新上次执行函数的时间戳
		}
	};
}