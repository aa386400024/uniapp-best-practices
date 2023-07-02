'use strict';

export const config = {
	// 应用相关配置
	app: {
		name: '企业级uni-app项目',
		abbreviation: '企业级uni-app项目',
		slogan: '企业级uni-app项目',
		version: '1.0.0',
		debug: true,
	},
	loginTypes: [
		'weixin',
		// #ifdef APP
		'apple',
		'univerify',
		// #endif
		'smsCode',
		'oa',
		'username'
	],

	// 导航栏相关配置
	navbar: {
		style: 'custom',
		custom: '/components/use-navbar/use-navbar',
	},

	// 路由相关配置
	route: {
		home: '/pages/home/home',
		login: '/pages/login/login',
		search: '/pages/home/search/search',
		order: '/sub-user/pages/order/order',
		pay: '/sub-goods/pages/pay/pay',
		goods: '/sub-goods/pages/detail',
		goodslist: '/sub-goods/pages/list',
	},

	// 服务提供商相关配置
	provider: {
		name: '',
		names: {
			weixin: '微信',
			qq: 'QQ',
			alipay: '支付宝',
			baidu: '百度',
			toutiao: '头条',
		},
	},

	// 常量
	constants: {
		storageKey: "__my_app_storage__",
	},
	
	api: {
	    baseUrl: process.env.BASE_URL,
	    timeout: 5000,
	    headers: {
	      'Content-Type': 'application/json',
	    },
	},
};

// #ifdef APP-PLUS
config.api.baseUrl = "https://cat-fact.herokuapp.com";
// #endif

export default config;