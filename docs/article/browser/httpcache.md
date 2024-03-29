# http 缓存

参考: [深入浅出前端缓存](https://mp.weixin.qq.com/s/9jgLM3xKhxWpHgmuW0uINQ)

Web 缓存是可以自动保存常见文档副本的 HTTP 设备。当 Web 请求抵达缓存时， 如果本地有“已缓存的”副本，就可以从本地存储设备而不是原始服务器中提取这 个文档。

`缓存主要是针对html,css,img等静态资源，常规情况下，我们不会去缓存一些动态资源，因为缓存动态资源的话，数据的实时性就不会不太好，所以我们一般都只会去缓存一些不太容易被改变的静态资源。`

- 优点

1. 减少不必要的网络传输，节约宽带（就是省钱）
2. 更快的加载页面（就是加速）
3. 减少服务器负载，避免服务器过载的情况出现。（就是减载）

- 缺点

1. 占内存

<br>

http缓存又分为两种缓存，强制缓存和协商缓存。

### **强制缓存**


强制缓存，我们简称强缓存。从强制缓存的角度触发，如果浏览器判断请求的目标资源有效命中强缓存，如果命中，则可以直接从内存中读取目标资源，无需与服务器做任何通讯。

- **Expires:** <br>

在以前，我们通常会使用响应头的`Expires`字段去实现强缓存。它的作用是，设定一个强缓存时间。在此时间范围内，则从内存（或磁盘）中读取缓存返回。

比如说将某一资源设置响应头为: Expires:new Date("2022-7-30 23:59:59")
那么，该资源在2022-7-30 23:59:59 之前，都会去本地的磁盘（或内存）中读取，不会去服务器请求。

Expires判断强缓存是否过期的机制是: 获取本地时间戳，并对先前拿到的资源文件中的Expires字段的时间做比较。计算机的本地时间是可以设置的, 即存在不准确的实际情况。如果本地与服务器时间不同步，就会出现资源无法被缓存或者资源永远被缓存的情况。

- **Cache-control:**<br>

Cache-control这个字段在http1.1中被增加，Cache-control完美解决了Expires本地时间和服务器时间不同步的问题。它的使用方法页很简单，只要在资源的响应头上写上需要缓存多久就好了，单位是秒。
`'Cache-Control':'max-age=10'`从该资源第一次返回的时候开始，往后的10秒钟内如果该资源被再次请求，则从缓存中读取。

Cache-control有max-age、s-maxage、no-cache、no-store、private、public这六个属性。

max-age: 决定客户端资源被缓存多久。<br>
s-maxage: 决定代理服务器缓存的时长。<br>
no-cache: 表示是强制进行协商缓存。<br>
no-store: 是表示禁止任何缓存策略。<br>
public: 表示资源即可以被浏览器缓存也可以被代理服务器缓存。<br>
private: 表示资源只能被浏览器缓存。<br>

如果某一资源的Cache-control中设置了no-cache，那么该资源会直接跳过强缓存的校验，直接去服务器进行协商缓存。而no-store就是禁止所有的缓存策略了。`no-cache和no-store是一组互斥属性，这两个属性不能同时出现在Cache-Control中。`

public和private就是决定资源是否可以在代理服务器进行缓存的属性。public表示资源在客户端和代理服务器都可以被缓存。private则表示资源只能在客户端被缓存，拒绝资源在代理服务器缓存。如果这两个属性值都没有被设置，则默认为private。

max-age表示的时间资源在客户端缓存的时长，而s-maxage表示的是资源在代理服务器可以缓存的时长。

### **协商缓存**

主要是在服务器端的一些缓存配置设置。

- **last-modified：**<br>


基于last-modified的协商缓存实现方式是:

1. 首先需要在服务器端读出文件修改时间
2. 将读出来的修改时间赋给响应头的last-modified字段。
3. 最后设置`Cache-control:no-cache`

当客户端读取到last-modified的时候，会在下次的请求标头中携带一个字段: If-Modified-Since。这个请求头中的If-Modified-Since就是服务器第一次请求时响应的时间。之后每次对该资源的请求，都会带上If-Modified-Since字段，而服务端就需要拿到这个时间并再次读取该资源的修改时间，让他们两个做一个比对来决定是读取缓存还是返回新的资源。

使用以上方式的协商缓存是通过比较修改时间来判断是否更改而产生的。所以在文件内容本身不修改的情况下，依然有可能更新文件修改时间（比如修改文件名再改回来）。而如果在极短时间内完成修改的时候（比如几百毫秒）。因为文件修改时间记录的最小单位是秒，假如文件在几百毫秒内完成修改的话，文件修改时间不会改变，依旧不会触发机制。


- **ETag：**<br>

ETag就是将原先协商缓存的比较时间戳的形式修改成了比较文件指纹。即根据文件内容计算出的唯一哈希值。文件内容一旦改变则指纹改变。

1. 第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的etag字段中跟资源一起返回给客户端。

2. 第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的ETag也就是文件指纹。并赋给请求头的if-None-Match字段，让上一次的文件指纹跟随请求一起回到服务端。

3. 服务端拿到请求头中的is-None-Match字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回304状态码和一个空的响应体并return。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的ETag中并返回给客户端

ETag需要计算文件指纹这样意味着，服务端需要更多的计算开销。如果文件尺寸大，数量多，并且计算频繁，那么ETag的计算就会影响服务器的性能。显然，ETag在这样的场景下就不是很适合。

ETag有强验证和弱验证，所谓将强验证，ETag生成的哈希码深入到每个字节。哪怕文件中只有一个字节改变了，也会生成不同的哈希值，它可以保证文件内容绝对的不变。但是，强验证非常消耗计算量。ETag还有一个弱验证，弱验证是提取文件的部分属性来生成哈希值。因为不必精确到每个字节，所以他的整体速度会比强验证快，但是准确率不高。会降低协商缓存的有效性。