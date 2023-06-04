# 基础镜像
FROM node:12-alpine

# 创建app目录
WORKDIR /usr/src/app

# 安装依赖
COPY package*.json ./
RUN npm install

# 拷贝所有源代码到工作目录
COPY . .

# TypeScript
RUN npm run build

# 对外暴露的端口
EXPOSE 8080

# 容器启动时运行的命令
CMD [ "npm", "run", "serve" ]
