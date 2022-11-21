# 前端面试分享(vue 方向)

[CSDN原文链接](https://blog.csdn.net/GonTinyBlack/article/details/109728725)



## **HTML**

 - 什么是 块级元素 和 行内元素？
 - p标签是块级元素，常理来说，块级元素是可以嵌套块级元素和行内元素的，`但是p标签是个特殊，它里面不能嵌套块级元素`。
 - 网页中，rem 作为元素尺寸单位时，是相对 文档根节点的 font-size 进行计算的。
 - 块级元素实际占用的宽度与它的 background 属性有关。
 - 语义化标签的使用。

## **CSS**

### CSS盒模型 box-sizing (常问)
标准模型 和 IE模型的区别就在于 width 和 height 的计算方式不同。
 - 标准盒模型  content-box width 只等于内容区域，不包括border和padding
 - 怪异(IE)盒模型 border-box width = 内容区宽度 + border + padding

### CSS权重 (常问) 

> !important > 内联样式(1000) >  id选择器(100) > class选择器(10) = 伪类选择器(10) = 属性选择器(10) > 元素选择器(1)
 - 内联样式: 写在标签里的style id选择器:  `#id-selector` 
 - class选择器: `.class-selector`
 - 伪类选择器: `.class-selector:first-child`  
 - 属性选择器: `a[href=“https://example.org”]` 
 - 元素选择器： `.class-selector > div`


### 让一个盒子 居中的方法 (常问)
这个光背没有用，自己去codepen写一下！[CodePen](https://codepen.io/)

 - Flex布局: `display: flex; justify-content: center; align-items: center;`
 - CSS定位: `position: fixed/ absolute/ relative`
 - 位移：`transform: translate(x, y);`
 - Margin: `margin: auto;`

### Flex布局 (常问)
属于必须知道的知识点吧，当前最流行的布局方式。
参考：[Flex 布局教程：语法篇 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

我被问到过这个问题：" 我们平常开发一般用到 `flex: 1` 这个属性
这个属性由哪3个属性组成，各自的作用是什么？" 可以去了解一下
参考文章：[flex的三个属性](https://blog.csdn.net/zjw0021/article/details/114199464)

### CSS的position
 - static 默认值 默认值，元素按照正常的文档流排布
 - relative 相对定位 相对于当前文档排布的位置进行一个定位，不会脱离文档流，与absolute不同
 - absolute 绝对定位 相对于一直往上找父亲元素直到找到position的属性值不为static的元素定位，定位以后元素会脱离文档流，影响排布
 -  fixed 固定 相对于浏览器视口进行定位
 - sticky ... 


### 伪类和伪元素
这个东西，经常分不清楚，我是用这种方式来区分的

> < 伪类和伪元素的区别，最关键的点在于如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类。>

举个例子：
我想在`<span>你好</span>`这个标签前面加一个小图标，如果没有伪元素(或伪类)，是需要添加一个图片或者背景图来实现这个效果的，而这个图片或者背景图就是我们添加的元素。同样的使用after或者before也能达到这个效果。所以after和before是伪元素。

> 伪类： 用来选择那些不能够被普通选择器选择的文档之外的元素，比如:hover。
> 
> 伪元素：创建通常不存在于文档中的元素，比如::before


### CSS隐藏元素的方式

 - display: none; 
 - opacity: 0;  
 - visibility: hidden;  
 - margin-left: -100%;
 - transform: scale(0); 
 - width:0; height: 0; overflow: hidden; 
 - position: absolute; top: -99999px; left: -999999px;


### CSS3有什么新特性

 - 边框属性
border-radius / box-shadow / border-image 边框图像

 - 背景属性
background-size 
background-origin 背景图片的定位区域 
background-clip 背景图片的绘制区域

 - 渐变属性
linear-gradient 线性渐变 / radial-gradient 径向渐变

 - 文本效果
word-break / word-wrap / text-overview / text-shadow / text-wrap / text-outline / text-justify

 - 弹性盒子(flexbox)
 - 2D转换  / 3D转换

 - 过渡 transition
 - 动画 @Keyframes / animation
 - 多媒体查询@media


### link和@import的区别：

 - link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
 - link可以加载CSS，Javascript；@import只能加载CSS。
 - link加载的内容是与页面同时加载；@import需要页面网页完全载入以后加载。


### 什么是文档流 

块状元素 / 行内块状元素 / 行内元素 在web中的正常排布，从上往下，从左往右的一个排布顺序，被称之为文档流
脱离文档：浮动(float)、绝对定位(absolute)、固定定位(fixed)三种方式定位会脱离文档流

 - 脱离文档流

> 元素脱离文档流之后，将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）。脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间。

### Less/Sass 变量的使用
```
@width: 10px;
@height: @width + 10px;

.header {
  width: @width;
  height: @height;
}
```

### 可继承元素 和 不可继承元素
参考：[CSS常见可继承属性与不可继承属性_风从北方来的博客-CSDN博客](https://blog.csdn.net/beifangdefengchuilai/article/details/82431288)

> 1. 可继承  / font 字体系列属性 比如 font-size text 	/ 文本系列属性 比如 color 元素可见性：visibility 光标属性：cursor 列表布局属性 / 表格布局属性 
> 2. 不可继承 太多了



## JavaScript

###  前端JS三大问： this / 闭包 / 原型和原形链 
这三个东西，必须弄懂。


### this相关 (常问)

- 如果一个函数有this，但是它没有被上一级对象所调用，严格模式下 this 指向 undefined， 否则指向window
- 如果一个函数中有this，这个函数有被上一级所调用，那么它指向的就是调用它的对象。
- 如果是一个链式的调用，则最内层的this指向最后一个调用他的对象


### 与this有关 (常问)
#### 1.箭头函数

>  this 绑定的是最近一层非箭头函数的 this

#### 2. this的指向
call / apply / bind 方法

```javascript
let a = {
  func1: function() {
    console.log('hi, i am func1');
  }
}

setTimeout(function(){
  this.func1()
}.apply(a),100);

setTimeout(function(){
  this.func1()
}.call(a),100);

//bind()方法创建一个新的函数 需要手动调用
setTimeout(function(){
  this.func1()
}.bind(a)(),100);
```

#### 3. new 的过程
```javascript
var a = new myFunction("Li","Cherry");

new myFunction{
  var obj = {};
  obj.__proto__ = myFunction.prototype;
  var result = myFunction.call(obj,"Li","Cherry");
  return typeof result === 'obj'? result : obj;
}
```


- 1. 创建一个空对象 obj;
- 2. 将新创建的空对象的隐式原型指向其构造函数的显示原型。
- 3. 使用 call 改变 this 的指向
- 4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。


### 闭包 (常问)

- 1. 简单简述一下什么是闭包
- 2. 简单说一下自己在什么地方用过闭包
- 3. 其实防抖(debounce)和节流(throttle)的原理就是使用到闭包，可以提一嘴，然后一般面试官就会继续问你，什么是防抖和节流，诱导面试官问你这个问题，然后其实你已经准备好了，这波在第几层？


### 原型和原型链 (常问)

> 原型：
> 用来存储公用的变量和方法的对象，所有的引用数据类型(数组/对象/函数)的实例都会有一个__proto__的属性，指向自己的原型。注意：原型也是一个对象，它也有自己的__proto__

所有的函数 都有 __proto__ 和 prototype 属性
普通的对象 数组 只有 __proto__ 属性


### let 和 var 的区别 (常问)

- 1. let定义的变量不能重复声明
- 2. var 定义的变量重复声明会覆盖之前的值
- 3. let定义的变量值在块级作用域内有效
- 4. var 定义变量存在声明提前的问题
- 5. let 定义的变量不存在声明提前的问题


### undefined 和 null 的区别 (常问)
关于JS类型的比较我专门写了一篇文章： [JS类型比较](https://blog.csdn.net/GonTinyBlack/article/details/115210933)

```javascript
undefined == null // true
undefined === null //false
undefined: 没有定义
null：定义了没有给值
typeof undefined // 'undefined'
typeof null // 'object'
```

### 判断类型的方式 (常问)

typeof / instanceof / Object.prototype.toString.call() 三种方式 口头简述

- **typeof**  可以较好的判断基本数据类型 ， 对引用数据类型的判断不友好，不能区分数组和对象和null，结果都为object。

- **instanceof** 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。对引用数据类型判断较好，对基本数据类型的判断不友好。

- **Object.prototype.toString.call([])** 最准确的判断方式 好用的一p  自个可以试试


```javascript
 Object.prototype.toString.call() // "[object Undefined]"
 Object.prototype.toString.call('') // "[object String]"
 Object.prototype.toString.call(2) //"[object Number]"
 Object.prototype.toString.call(false) // "[object Boolean]"
 Object.prototype.toString.call(undefined) // "[object Undefined]"
 Object.prototype.toString.call(null) // "[object Null]"
 Object.prototype.toString.call([1,2]) // "[object Array]"
 Object.prototype.toString.call({}) // "[object Object]"
```


### JS的事件机制 (常问)

> JavaScript 事件触发有三个阶段。 
> CAPTURING_PHASE ，即捕获阶段 
> AT_TARGET ，即目标阶段
> BUBBLING_PHASE ，即冒泡阶段

addEventListener(‘click’, function(){}, false); // 默认为false 冒泡阶段

继续往下问可能会问到 **事件委托**，简述使用场景，好处。其实是性能优化的一种方式

举个例子，手写一个计算器，可以把事件绑定在父亲最外层，点击后通过currentTarget / target 来判断当前点击的元素是哪个，从而编写我处理逻辑。

> 这里又可以引入另一个问题(层层套哈哈哈，诱导面试官来问)， 
> **currentTarget和target的区别是什么** 
> < 参考文章：[currentTarget和target的区别](https://www.jianshu.com/p/1dd668ccc97a)>

这个文章可以看看哈。简单来说，target就是我们点击的那个元素，currentTarget就是当前冒泡冒到了的那个元素。



### EventLoop  JS的事件循环机制 (常问)
参考文章： [阮一峰 - EventLoop](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)

- 1.所有同步任务都在主线程上执行，形成一个[执行栈](http://www.ruanyifeng.com/blog/2013/11/stack.html) (execution context stack)。
- 2.主线程之外，还存在一个”任务队列”(task queue)。只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。
- 3.一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
- 4.主线程不断重复上面的第三步。

### 题外话： 谈谈异步的问题
经典的，非常经典的问题题目，笔试面试经常提问！

```javascript
setTimeout(() => {
	console.log(1);
}, 0);

new Promise((resolve) => {
	console.log(2);
	resolve();
	console.log(3);
}).then(() => {
	console.log(4);
})

console.log(5);
```
搞懂它！跟事件循环/微任务 有关。



### 线程和进程
参考：[从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872)

setTimeout导致往后延了才执行 是为什么呢
setTimeout和setInterval的运行机制是，将指定的代码移出本次执行，放到任务队列中，等到下一轮Event Loop时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮Event Loop时重新判断。这意味着，setTimeout指定的代码，必须等到本次执行的所有代码都执行完，才会执行。Promise的任务也是如此。

**为什么Promise的then操作输出比setTimeout的先执行？**
promise属于一种微任务，当他的代码执行完以后会推入到本次的事件循环中，而setTimeout要等到下一次的事件循环，所以promise比setTimeout先执行。

再往下衍生，就会开始问promise的问题

### **< Promise 和 async awiat >**  (常问)
直接看下面的链接看内容，一般牵涉的问题有以下几点。
#### Promise && Async Await
参考文章：[ES6 Promise](https://es6.ruanyifeng.com/#docs/promise)  && [async](https://es6.ruanyifeng.com/#docs/async)


- 1.对promise的理解
- 2.简述一下平常怎么使用，使用场景
- 3.回调地狱
- 4.这两者的区别是什么 promise 和 async await




#### 回调函数
参考：[深入理解 JavaScript 回调函数](https://juejin.im/post/6844903987771097102)
按照 MDN 的描述：回调函数是作为参数传给另一个函数的函数，然后通过在外部函数内部调用该回调函数以完成某种操作。

当多个异步函数一个接一个地执行时，会产生回调地狱。
如何解决？1. 使用promise 2.借助 async-await


* async/await: 回调地狱的终极解决方案

```javascript
async function request () {
  try {
    const result = await doSomething()
    const newResult = await doSomethingElse(result)
    const finalResult = await doThirdThing(newResult)
  } catch (error) {
    failureCallback(error)
  }
}
```


### Cookie 、LocalStorage和SessionStorage的区别 (常问)
这篇文章可以看一看 讲解了所有数据存储的方式 [JS数据存储](https://www.cnblogs.com/sylvia-Camellia/p/11589569.html)

一、Cookie

- 1.cookie 的存放数据大小为4K左右。一般由服务器生成, 可设置失效时间
- 2.如果在浏览器端生成Cookie, 默认是关闭浏览器后失效
- 3.cookie因为保存在客户端中, 其中包含的任何数据都可以被他人访问, cookie安全性比较低。
- 4.与服务器通信时, 每次都会携带在HTTP头中。
- 5.cookie需要在客户端和服务器端之间来回传送, 会浪费不必要的资源如果过多会带来性能问题。

二、localStorage

- 1.localStorage的大小一般为5MB, 保存在本地, 除非被清除, 否则永久保存。
- 2.仅在客户端中保存, 不参与和服务器的通信。
- 3.是以key/value的形式进行存储, value值只能存储字符串。如果想要存储对象, 可以用JSON.stringify()进行转换为字符串, 取值的时候再使用JSON.parse()解析。

```javascript  
// 存储的两种方式
localStorage.setItem("isConfirm", "true");
localStorage.isConfirm= "true";

// 读取
localStorage.getItem("isConfirm");
localStorage.isConfirm; 
```

三、sessionStorage

- 1.一般为5MB，仅在当前会话下有效，关闭页面或浏览器后被清除。
- 2.仅在客户端(即浏览器)中保存，不参与和服务器的通信。
- 3.存储在sessionStorage中的数据可以跨越页面刷新而存在。
- 4.受到同源策略限制，若想在不同页面之间对同一个sessionStorage进行操作，这些页面必须在同一协议、同一主机名和同一端口下
- 5.是以key/value的形式进行存储，value值只能存储字符串

```javascript  
// 存储的两种方式
sessionStorage.setItem("isConfirm", "true");
sessionStorage.isConfirm= "true";

// 读取
sessionStorage.getItem("isConfirm");
sessionStorage.isConfirm; 
```



### 如何解决跨域问题 (常问)
这个自己去搜吧哈哈，之前没怎么记录这个问题，倒是挺常问的

JSONP / img标签 或者 script标签等 / nginx































