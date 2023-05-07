module.exports = {
	options: {
		// 定义环境变量
		env: {
			UNI_ENV: process.env.UNI_ENV || 'development',
		},
	},
	// 定义自定义发行
	commands: [
		{
			name: 'serve',
			description: '启动开发服务器',
			script: 'npm run serve',
		},
		{
			name: 'build:dev',
			description: '构建开发环境应用程序',
			script: 'npm run build:dev',
		},
		{
			name: 'build:test',
			description: '构建测试环境应用程序',
			script: 'npm run build:test',
		},
		{
			name: 'build:prod',
			description: '构建生产环境应用程序',
			script: 'npm run build:prod',
		},
	],
}
