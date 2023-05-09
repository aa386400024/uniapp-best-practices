import { defineStore } from 'pinia'

interface CounterState {
	count: number
}

export const useCounterStore = defineStore('counter', {
	state: (): CounterState => {
		return { count: 0 }
	},
	getters: {
		doubleCount(): number {
			return this.count * 2
		},
	},
	actions: {
		increment(): void {
			console.log('Increment method called');
			this.count++
		},
	},
})
