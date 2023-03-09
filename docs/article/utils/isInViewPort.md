
# 判断dom元素是否出现在可视区域内

需求：<br>
浏览器页面中存在一个展示板块，板块内容为视频展示，需要做到该视频处于浏览器可视区域内时，才播放，不在时则暂停。

将需要判断的el元素传入到以下方法中，即可判断元素是否出现在可视区域内。

```javascript
// 判断dom元素是否出现在可视区域内
export function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left,
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  );
}
```

因为与onscroll方法绑定使用，所以也要注意一下使用防抖和节流来限时一下触发的频率！