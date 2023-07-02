// 实现日期格式化逻辑
export function formatDate(date : Date) : string | void {
	// 将日期转换为字符串，格式为 "YYYY-MM-DD"
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

	return formattedDate;
}