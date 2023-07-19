# 浏览器兼容问题

## 内外边距
不同浏览器标签默认的外边距和内边距不同, 经常开发的人肯定会看见这句话, 也是解决这个问题的基本操作。
```css
* {
  margin: 0px;
  padding: 0px;
}
```

## 滚动

```overflow: scroll```; 

设置该属性, 火狐浏览器的区域会显示滚动条, 而chrome和safari是不会的, 编写该样式时务必加上以下样式,  用于隐藏火狐浏览器的滚动条。

```scrollbar-width: none;```

## 滑动卡顿

通过media写好了手机端的适配方案，在手机上启动时，滑动时页面不会自动往下滚，而是卡住了。
手机端部分滚动区域可能会出现不顺畅的情况(不会经常出现), 加上以下样式

```-webkit-overflow-scrolling: touch; overflow-scrolling: touch;```

## 隐藏滚动条的方式不同

```css
/* chrome */
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
/* firefox */
scrollbar-width: none;
```

## css权重取值不同

chrome和firefox不同，穿透样式修改时，firefox不生效。

## 字体大小
chrome的默认最小字号大小为12px, 用户可以自行通过浏览器设置最小的字号。<br>
而safari/firefox的最小字号可以到0px, 这就导致小于12px的字体不能在chrome更好的显示。

解决的办法:
- transform 将文字按比例缩小, 但是会带来问题, 缩小不会改变实际的dom元素大小, 只能有视觉上的缩小。
- image 将所要展示的内容区域转换成图片来显示。 


## flex上面固定下面滚动

上面的固定高度需要写高度，下面得区域也得写高度，不然其他浏览器就会有问题。<br>
例如头部50px，那么下面的区域则为 calc( 100% - 50px ) / calc(100vh - 50px)

## input输入框

输入框写了高度，一定要给line-height，不然safari会出现文字位置不对的问题。

## vedio标签在安卓端不能自动播放

ios设备可以较好的对vedio标签的api进行调用, 而安卓设备存在的问题较多。


## 移动端使用100vh问题

原因: 页面内容区域用的单位是vh, 而在第一次进入加载时, 还没有对应的路由栈信息, 所以底部不会出现后退前进的操作拦, 但是当进行了路由操作后, 操作栏就出现了, 但是高度还是计算了这一部分,  导致页面无法拖动到最底部。



## JS

- 在随页面滚动展示动画的页面中有使用到

scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

AJAX

取消冒泡/取消默认事件的方式不同
