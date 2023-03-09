# CSS

***我会在这里记录一些CSS的知识，遇到就记！***


## 水平居中的方法
[codepen例子](https://codepen.io/986191391/pen/oNYEzxd)
- 一、父亲元素的宽度为100%,  孩子元素的宽度固定，设置margin: 0 auto;
- 二、父亲元素display为flex，设置justify-content为center，孩子元素固定宽度；
- 三、父亲元素的position为relative，孩子元素固定宽度，position为absolute，设置left值为calc(50% - 一半的宽度);
- 四、transform来位移



## link 与 @import 的区别
link标签在最开始写html的时候有遇到过，到后面使用到了框架就很少看到这个字段。
我们在打开控制台的时候就可以发现这个东西
![link](https://img-blog.csdnimg.cn/20210226160401885.png)

它是XHTML标签，主要是用于引入css文件，当然也可以引入js文件。
@import 也是用于引入css文件的(不要于框架的import搞混了)，存在兼容性的问题，且只能引入css。
两者最主要的区别是 link引入的css页面加载时会先加载css再加载HTMl，而import引入是反过来的。

**下面总结主要区别：**

- 1、link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- 2、link可以加载CSS，Javascript；@import只能加载CSS。
- 3、link加载的内容是与页面同时加载；@import需要页面网页完全载入以后加载。
		 

## BFC 和 IFC
[BFC 参考文章](https://blog.csdn.net/sinat_36422236/article/details/88763187)

**BFC(Block formatting context): 称为块级格式化上下文**，是CSS中的一种渲染机制。是一个拥有独立渲染区域的盒子(也可以理解为结界)，规定了内部元素如何布局，并且盒子内部元素与外部元素互不影响。

谈到这个我只能想到，同一个BFC的两个相邻Box他们的margin会重叠。至于其他float带来的问题，主要是现在基本都不使用float，会带来很多其他的问题等(例如脱离文档)。想要了解更多BFC的话就看看上面链接的文章吧!


**IFC (Inline Formatting Contexts)行内格式化上下文**


## 清除浮动的几种方式
正常的块级元素布局是由上往下的，且每一个块级元素都会占满一整行，当我们为其中一个块级元素设置了浮动(float)以后，例如float: left,当前这一个块级元素它的宽度就不会沾满一整行，而是由它的内容来决定。
后面的一个块级元素会跟这前面的浮动元素从左到右排布，这就是浮动的现象。

而怎么解决这一想象，就是清除浮动。

1. 父级div定义伪类：after和zoom 
	为浮动的元素添加一个父亲元素，给父亲元素绑定一个after伪类，伪类的内容为

```css
div::after{
  content: '';
  clear: both;
}
```

2. 在浮动的元素后面添加一个元素，给该元素绑定 `clear: both` 的css属性
3. 为浮动的元素添加一个父亲元素，给父亲元素绑定 `overflow: hidden` 的属性
4. 父亲元素也一起浮动

知道这几项就差不多了，其他的知道也用不着都是偏门



## CSS盒模型 box-sizing
- 1. 标准盒模型 content-box
width 只等于内容区域，不包括border和padding
- 2. 怪异(IE)盒模型 border-box
width = 内容区宽度 + border + padding


## CSS权重
!important > 内联样式(1000) > id选择器(100) > class选择器(10) = 伪类选择器(10) = 属性选择器(10) > 元素选择器(1)

内联样式: 写在标签里的style<br>
id: id = “id-selector”<br>
class: class = “class-selector”<br>
伪类: .class-selector:first-child<br>
属性: a[href=“https://example.org”]<br>
元素: .class-selector > div


## CSS的position
- 1. static 默认值
默认值，元素按照正常的文档流排布
- 2. relative 相对定位
相对于当前文档排布的位置进行一个定位，不会脱离文档流，与absolute不同
- 3. absolute 绝对定位
相对于一直往上找父亲元素直到找到position的属性值不为static的元素定位，定位以后元素会脱离文档流，影响排布
- 4. fixed 固定
相对于浏览器视口进行定位
- 5. sticky


## 伪类和伪元素
这个东西是真的特别容易搞混来，区别伪类和伪元素的关键就是<br>
*`如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类。`*

举两个例子：
- 1. hover一个div的时候，我想给它添加一个背景颜色。我们不用伪类的时候，添加元素可以达成这个效果吗？不借助js的话显然是不行的，所以 `:hover 就是伪类`
- 2. 我想在当前的div后面添加一个文本片段内容为“你好”，当我们不使用伪元素的时候，显然在当前文本后面添加一个元素是可以做到的，所以 `:after 是伪元素`

这样子看起来好像就好理解了很多，反正我是这样记下来的哈！


## display: none 和 visibility: hidden 的区别
`display: none`<br>
将元素隐藏，设置了该熟悉的dom元素将不会渲染在页面中，不会占任何的位置。该属性影响到dom结构的变化，会导致回流(reflow)的现象。

`visibility: hidden`<br>
同样是将元素隐藏，但是并没有在dom中消失，只是设置为了不可见，还占领着原来的宽高。该属性不影响到dom结构的变化，会导致重绘(repaint)的现象。



