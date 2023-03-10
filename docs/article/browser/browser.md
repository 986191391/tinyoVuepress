# 浏览器

## 主流浏览器内核
- Google<br>
书写前缀—webkit—<br>
以前是Webkit内核，现在是Blink内核。<br>
Blink内核：由谷歌和Opera开发，2013年4月发布。

- Safari<br>
书写前缀—webkit—, Webkit内核。

- IE<br>
书写前缀—MS—, Trident内核。

- Firefox<br>
书写前缀—MOZ—, Geocko内核。

## 进程与线程
参考：[阮一峰 - 进程与线程](https://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)

## 输入域名到网页渲染完成

浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面；
把请求回来的 HTML 代码经过解析，构建成 DOM 树；
计算 DOM 树上的 CSS 属性；
最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
合成之后，再绘制到界面上。

1. **浏览器的地址栏中输入一个URL地址**<br>
2. **开始向WEB服务器发送请求**<br>
- DNS解析<br>
DNS，Domain Name System，域名系统。将域名和 IP 地址进行关联。<br>
-域名解析的过程：首先访问本地 DNS 服务器，如果查询不到目标域名，则会从根域一层层往下，直到找到对应 DNS 服务器为止，即可获得相应的 IP 地址。<br>
-扩展-本地DNS服务器：本地 DNS 服务器一般是网络运营商的服务器地址，或者为路由器设置的地址。主要用于向权威 DNS 获取解析记录，并缓存解析结果。<br>
-扩展-DNS缓存：除了本地 DNS 服务器会有 DNS 缓存之外，浏览器也会有，还有 hosts 文件中保存的静态解析。比如更改了域名解析后，往往要等待几分钟才能生效，就是因为这些缓存的存在。<br>

- 产生HTTP请求信息<br>

## DNS查询
参考：[阮一峰 - DNS查询原理](https://www.ruanyifeng.com/blog/2022/08/dns-query.html)
域名对应的 IP 地址，都保存在 DNS 服务器。<br>
我们输入域名，浏览器就会在后台，自动向 DNS 服务器发出请求，获取对应的 IP 地址。这就是 DNS 查询。<br>
## 渲染原理

## 引擎

## 缓存