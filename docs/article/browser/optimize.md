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


- IE浏览器的各种问题
