import './uni.promisify.adaptor'
import '@/uni.scss' // 引入全局样式
import uviewPlus from '@/uni_modules/uview-plus'
import { App } from 'vue' // 导入 App 类型
import router from '@/router'
// 将插件添加到 plugins 数组中
export const plugins = [uviewPlus]

export function setupPlugins(app: App, plugins: any[] = []) {
	app.use(router)
	// 使用插件
	plugins.forEach(plugin => {
		app.use(plugin)
	})
}
