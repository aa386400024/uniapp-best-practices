import App from './App';
import * as Pinia from 'pinia';
import { setupPlugins, plugins } from '@/plugins';
import { piniaPersistPlugin } from '@/stores/pinia-persist-plugin';

import { createSSRApp } from 'vue';

export function createApp() {
	const app = createSSRApp(App);

	app.use(Pinia.createPinia().use(piniaPersistPlugin)); // 添加 piniaPersistPlugin
	setupPlugins(app, plugins); // 使用插件和功能设置
	  
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}