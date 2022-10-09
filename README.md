# 元计划项目

## 下载项目依赖
```
yarn install / npm install
```

### 运行项目
```
yarn serve / npm run serve
```

### 打包
```
yarn build / npm run build
```

## 本地开发注意事项

1. 在vue.config.js 的 devServer 中可以配置代理地址
2. 在utils的env.js文件中定义了所有环境的地址, 可以根据需要修改


## 打包上生产时注意事项

1. 检查是否有测试环境的数据影响
2. 检查调用接口是否有写死值！
3. 配置登录后跳转回测试地址的方法在 permission.js 的35-41行中 (20220924)
4. 打包时注意将全局的console.log语句删除(目前唯独留了一句permission.js中的'no getToken')
#   c o o l c o o l v u e  
 