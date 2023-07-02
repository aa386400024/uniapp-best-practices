/**
 * 深拷贝函数，用于复制一个对象并返回拷贝后的副本
 * @param obj 要进行深拷贝的对象
 * @returns 深拷贝后的对象副本
 */
export function deepCopy<T>(obj : T) : T {
	// 如果对象为 null 或者不是对象类型，则直接返回对象本身
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	// 如果对象是 Date 类型，则创建一个新的 Date 对象，并使用原始日期对象的时间戳来初始化
	if (obj instanceof Date) {
		return new Date(obj.getTime()) as any;
	}

	// 如果对象是 RegExp 类型，则创建一个新的 RegExp 对象，并使用原始正则表达式的字符串来初始化
	if (obj instanceof RegExp) {
		return new RegExp(obj) as any;
	}

	// 如果对象是 Map 类型，则创建一个新的 Map 对象，并递归调用 deepCopy 处理每个键值对
	if (obj instanceof Map) {
		const copy = new Map();
		obj.forEach((value, key) => {
			copy.set(key, deepCopy(value));
		});
		return copy as any;
	}

	// 如果对象是 Set 类型，则创建一个新的 Set 对象，并递归调用 deepCopy 处理每个元素
	if (obj instanceof Set) {
		const copy = new Set();
		obj.forEach((value) => {
			copy.add(deepCopy(value));
		});
		return copy as any;
	}

	// 如果对象是数组类型，则创建一个新的空数组 copy，并递归调用 deepCopy 处理数组中的每个元素
	if (Array.isArray(obj)) {
		const copy : any[] = [];
		for (let i = 0; i < obj.length; i++) {
			copy[i] = deepCopy(obj[i]);
		}
		return copy as any;
	}

	// 如果对象是普通对象类型，则创建一个空对象 copy，并使用 for...in 循环遍历对象的属性
	const copy : Record<string, any> = {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			// 递归调用 deepCopy 处理属性的值，并将其赋值给 copy 对象的相应属性
			copy[key] = deepCopy(obj[key]);
		}
	}

	return copy as any;
}