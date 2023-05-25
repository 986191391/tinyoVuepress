
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

<!-- 
map 和 object 的区别
map的key可以是任意类型
map可以用for of遍历
obj用for in  只能循环可枚举 且遍历原型上的属性值
键值对存放的顺序
怎样计算键值对的个数  map.size

常见的微任务 promise
宏任务 定时器 -->