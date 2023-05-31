const { PiniaPluginContext } = require('pinia');

const { STORAGE_KEY } = require('@/config/env');

// 定义持久化状态的键
const persistStateKeys = [{
		storeId: 'counter',
		key: 'count'
	},
	{
		storeId: 'auth',
		key: 'isLoggedIn'
	},
];

const piniaPersistPlugin = ({ store }) => {
	// 获取已有的本地数据并将其合并到 store 中
	const persistedState = uni.getStorageSync(STORAGE_KEY);
	if (persistedState) {
		store.$patch(JSON.parse(persistedState));
	}

	// 在 store 被修改时更新本地数据
	store.$subscribe(({
		events
	}) => {
		// 确保 events 是一个 DebuggerEvent 对象
		if (!Array.isArray(events)) {
			// 查找当前 store 是否需要持久化指定的状态
			const stateKey = persistStateKeys.find(
				(key) => key.storeId === store.$id && key.key === events.key
			);
			if (stateKey) {
				// 获取指定状态的值
				const {
					[stateKey.key]: value
				} = store.$state;

				// 获取已有的本地数据
				const existingData = JSON.parse(uni.getStorageSync(STORAGE_KEY) || '{}');

				// 将指定状态保存到本地存储中
				uni.setStorageSync(STORAGE_KEY, JSON.stringify({
					...existingData,
					[stateKey.key]: value
				}));
			}
		}
	});
};

module.exports = {
	piniaPersistPlugin,
};