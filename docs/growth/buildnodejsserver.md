# NodeJS服务器搭建

参考：[简易搭建nodejs服务器](https://zhuanlan.zhihu.com/p/76300383)

- 全局安装express命令安装工具 输入命令： npm install -g express-generator
- 再安装express框架 输入命令： npm install -g express

启动后这样显示, 直接去浏览器跑localhost:端口号, 就好了, 端口号是在bin》www文件下定义的, 默认是3000端口
```
> tinyoserver@0.0.0 start
> node ./bin/www
```

## nodejs服务的弊端

- 默认的工程, 在线编辑后无法实时更新工程服务, 需要重启。