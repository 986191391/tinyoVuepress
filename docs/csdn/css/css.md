# CSS


## 水平居中的方法
[codepen例子](https://codepen.io/986191391/pen/oNYEzxd)
1. margin: 0 auto;
2. display: flex; justify-content: center
3. position: absolute
4. transform: translateX()

## dom元素消失的方法
1. opacity: 0
2. position: absolute; top: -10000px
3. width: 0px; height: 0px; overflow: hidden;
4. transform: scale(0) // 或者位移到看不见的地方或者3d旋转到其他面
5. display: none
6. visibility: hidden

## BFC
<!-- [BFC 参考文章](https://blog.csdn.net/sinat_36422236/article/details/88763187) -->

**BFC(Block formatting context): 称为块级格式化上下文**，是CSS中的一种渲染机制。是一个拥有独立渲染区域的盒子(也可以理解为结界)，规定了内部元素如何布局，并且盒子内部元素与外部元素互不影响。
画重点！*盒子内部元素与外部元素互不影响*。<br>
所以通过设置BFC可以解决很多问题，例如：清除浮动，上下容器margin值重叠的问题。

设置BFC的方式：
- float的值不为none。
- position的值不为static或者relative。
- display的值是inline-block、table-cell、flex、grid、table-caption或者inline-flex等
- overflow的值不为visible


**IFC (Inline Formatting Contexts)行内格式化上下文**

## Flex
参考：[Flex 布局教程：语法篇 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

Flex作为当前最流行的布局, 是否了解它的所有属性了？

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。<br>
这一段描述就很好的解释了，为什么用flex定义的区域编写”超出部分省略号“不能生效，因为子元素也自动变成了flex item。

flex布局的基本属性在文章中很详细的解析了。最需要注意及面试官最喜欢问到的问题就是，flex: 1 属性是由哪些属性组成？

#### flex-grow属性
flex-grow属性定义项目的放大比例，`默认为0`，即如果存在剩余空间，也不放大。<br>
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

#### flex-shrink属性
flex-shrink属性定义了项目的缩小比例，`默认为1`，即如果空间不足，该项目将缩小。<br>
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，属性为0的项目不缩小。负值对该属性无效。

#### flex-basis属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。<br>
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

#### flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。


## 盒模型
- 1. 标准盒模型 content-box
width 只等于内容区域，不包括border和padding
- 2. 怪异(IE)盒模型 border-box
width = 内容区宽度 + border + padding


## 权重
!important > 内联样式(1000) > id选择器(100) > class选择器(10) = 伪类选择器(10) = 属性选择器(10) > 元素选择器(1)

内联样式: 写在标签里的style<br>
id: id = “id-selector”<br>
class: class = “class-selector”<br>
伪类: .class-selector:first-child<br>
属性: a[href=“https://example.org”]<br>
元素: .class-selector > div


## 伪类和伪元素
这个东西是真的特别容易搞混来，区别伪类和伪元素的关键就是<br>
*`如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类。`*

举两个例子：
- 1. hover一个div的时候，我想给它添加一个背景颜色。我们不用伪类的时候，添加元素可以达成这个效果吗？不借助js的话显然是不行的，所以 `:hover 就是伪类`
- 2. 我想在当前的div后面添加一个文本片段内容为“你好”，当我们不使用伪元素的时候，显然在当前文本后面添加一个元素是可以做到的，所以 `:after 是伪元素`

这样子看起来好像就好理解了很多，反正我是这样记下来的哈！



