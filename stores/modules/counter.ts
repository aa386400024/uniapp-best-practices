const { defineStore } = require('pinia');

const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	getters: {
		doubleCount() {
			return this.count * 2;
		}
	},
	actions: {
		increment() {
			console.log('Increment method called');
			this.count++;
		}
	}
});

module.exports = {
	useCounterStore
};
