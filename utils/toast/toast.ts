/**
 * 显示提示信息
 * @param title 提示信息的标题
 * @param duration 提示信息显示的持续时间（单位：毫秒），默认为 1500 毫秒
 */
export function showToast(title : string, duration : number = 1500) : void {
	// 创建一个新的 <div> 元素作为 toast 的容器
	const toastElement = document.createElement('div');

	// 设置 toast 的文本内容为传入的标题
	toastElement.textContent = title;

	// 添加 CSS 类名 "toast"，用于自定义样式
	toastElement.classList.add('toast');

	// 将 toast 元素添加到文档的 <body> 中
	document.body.appendChild(toastElement);

	// 使用 setTimeout 在指定的持续时间后移除 toast 元素
	setTimeout(() => {
		document.body.removeChild(toastElement);
	}, duration);
}