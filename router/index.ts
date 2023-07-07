import { createRouter } from 'uni-mini-router' // https://fant-mini-plus.top/fant-mini-plus/uni-mini-router/introduction.html
const router = createRouter({
	routes: [...ROUTES] // 路由表信息
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
	// 添加你的守卫逻辑
	// ...

	// 确保要调用 next() 方法，否则钩子就不会被 resolved
	next();
});

// 全局后置守卫
router.afterEach((to, from) => {
	// 添加你的守卫逻辑
	// ...
});
export default router