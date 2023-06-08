# 兼容问题

- 默认margin和padding值不同
```css
* {
  margin: 0;
  padding: 0;
}
```

- 浏览器默认最小字号不同

- 隐藏滚动条的方式不同

```css
/* chrome */
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
/* firefox */
scrollbar-width: none;
```

- css权重取值不同

chrome和firefox不同，穿透样式修改时，firefox不生效。


- a标签蓝色边框

- 谷歌浏览器上记住密码后输入框背景色为黄色


- IE浏览器的各种问题



## JS

- 在随页面滚动展示动画的页面中有使用到

scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

AJAX

取消冒泡/取消默认事件的方式不同





