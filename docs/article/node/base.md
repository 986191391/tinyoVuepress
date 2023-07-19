# 什么是Node, 与浏览器JavaScript的区别？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，可以在服务器端运行 JavaScript 代码。其主要特点包括：

- 非阻塞、事件驱动的 I/O 模型：利用事件循环机制和回调函数处理并发请求，提高了系统的吞吐量和性能。
- 单线程：通过利用异步非阻塞的特性，可以处理大量并发连接，而无需为每个连接创建新的线程，节省了系统资源。
- 跨平台：Node.js 可以运行在多个操作系统上，如 Windows、Linux、Mac OS 等。
- 轻量和高效：Node.js 的设计目标是轻量级、高效的网络应用，适用于实时应用程序和数据密集型的实时 Web 应用。



| 区别 | JavaScript        | Nodejs           |
| -- | ------------- |:-------------:|
| 环境 | 浏览器中的 JavaScript 运行在浏览器环境中 |  Node.js 运行在服务器端的运行时环境中 |
| API 和对象 |       | Node.js 提供了一些额外的 API 和对象，用于操作文件系统、网络、进程等服务器端功能   |
| 模块系统 | 浏览器中使用的是 ES6 模块系统，可以使用 import 关键字 | Node.js 使用 CommonJS 模块系统，可以使用 require() 导入模块 |
| DOM访问 | 在浏览器中，JavaScript 可以访问和操作网页的 DOM | 在 Node.js 中没有 DOM 访问能力，因为它是针对服务器端开发而设计的 |



Node.js的运行机制如下:

- V8引擎解析JavaScript脚本。
- 解析后的代码，调用Node API。
- libuv库负责Node API的执行。`它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环）`，以异步的方式将任务的执行结果返回给V8引擎。
- V8引擎再将结果返回给用户。

