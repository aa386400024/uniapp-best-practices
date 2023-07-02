export class CancelToken {
	private static requestMap: Map<string, UniApp.RequestTask> = new Map()

	static addRequest(url: string, requestTask: UniApp.RequestTask) {
		this.requestMap.set(url, requestTask)
	}

	static removeRequest(url: string) {
		this.requestMap.delete(url)
	}

	static cancel(url: string, reason?: string) {
		const requestTask = this.requestMap.get(url)
		if (requestTask) {
			requestTask.abort(reason)
			this.requestMap.delete(url)
		}
	}
}
