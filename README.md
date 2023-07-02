```
│  .gitignore                     # git忽略文件规则
│  App.vue                        # 主组件
│  env.js                         # 自动化测试配置文件
│  index.html                     # 主HTML文件
│  jest.config.js                 # Jest测试配置文件
│  LICENSE                        # 许可证文件
│  main.js                        # 主js文件，入口文件
│  manifest.json                  # 应用配置文件
│  package.json                   # npm包管理文件
│  pages.json                     # 页面配置文件
│  README.md                      # 项目的读我文件
│  tsconfig.json                  # TypeScript配置文件
│  uni.scss                       # 全局样式文件
│  vite.config.js                 # Vite配置文件
│  
├─.github                         # GitHub工作流配置目录
│  └─workflows
│          ci.yml                 # 持续集成配置文件
│          
├─.hbuilderx                      # HBuilderX配置目录
│      launch.json                # 启动配置文件
│      
├─api                             # api管理目录
│  │  index.ts                    # api入口文件
│  │  
│  ├─interceptors                 # 拦截器目录
│  │      index.ts                # 拦截器入口文件
│  │      request-interceptor.ts  # 请求拦截器
│  │      response-interceptor.ts # 响应拦截器
│  │      
│  └─todos                        # 示例api目录
│          index.ts               # 示例api入口文件
│          
├─components                      # 组件目录
│  ├─base                         # 基础组件目录
│  ├─custom                       # 自定义组件目录
│  │      custom.vue              # 自定义组件
│  │      
│  └─layout                       # 布局组件目录
├─config                          # 配置目录
│      index.ts                   # 配置入口文件
│      
├─docker                          # Docker配置目录
│      docker-compose.yml         # Docker Compose配置文件
│      Dockerfile                 # Docker配置文件
│      
├─node_modules                    # npm包目录
│  └─.vite
├─pages                           # 页面目录
│  ├─home                         # home
│  │       index.test.js          # home页面测试文件
│  │       index.vue              # home页面文件
│  └─my                           # my
│          index.test.js          		# my页面测试文件
│          index.vue              		# my页面文件
├─sub_packages                    # 分包页面目录
│   └─auth						  # 用户相关
│		├─pages					  		# pages
│		│  ├─login							# 登录
│		│  │      index.vue						# 登录页面文件
│		│  └─register						# 注册
│		│          index.vue					# 注册页面文件
│		└─services						# 用户相关服务
│				authService.ts					# 用户相关服务文件
├─plugins                         # 插件目录
│      index.ts                   # 插件入口文件
│      uni.promisify.adaptor.ts   # 示例插件
│      
├─static                          # 静态资源目录
│      logo.png                   # logo图片
│      
├─stores                          # Vuex状态管理目录
│  │  index.ts                    # Vuex状态管理入口文件
│  │  pinia-persist-plugin.ts     # Vuex持久化插件
│  │  
│  └─modules                      # Vuex模块目录
│          counter.ts             # 示例Vuex模块
│
├─styles						  # 样式目录，存放所有全局样式文件
│   common.scss                   		# 存放项目中通用样式的文件
│   index.scss                    		# SCSS入口文件，通常用于导入所有其他样式文件
│   mixins.scss                   		# 存放SCSS的mixin定义，用于代码复用
│   utilities.scss                		# 存放工具类样式，比如边距、字体大小等，常常用于快速布局
│   variables.scss                		# 存放全局SCSS变量，比如颜色、字体等项目主题相关的定义
├─test-log                          # 测试日志目录
│  └─uni-formwork
│      └─h5
├─types                             # 类型定义目录
│      api.d.ts                     # API类型定义文件
│      global.d.ts                  # 全局类型定义文件
│      uview-plus.d.ts              # uView类型定义文件
└─utils                             # 实用工具目录
        cancel-token.ts             # 请求取消工具
        index.ts                    # 实用工具入口文件
        request.ts                  # 请求工具
```