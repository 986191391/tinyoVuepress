# 有(坑)趣(爹)的CSS

## 竖向方向margin值重叠

[codepen示例](https://codepen.io/986191391/pen/KKzQvEg)

```html
<div class="demo1">demo1</div>
<div class="demo2">demo2</div>
```
```css
.demo1 {
  width: 200px;
  background-color: pink;
  margin-bottom: 50px;
}

.demo2 {
  width: 200px;
  background-color: green;
  margin-top: 50px;
}
```
demo1有向下的marginBottom: 50px<br>
而demo2有向上的marginTop: 50px<br>
但是他们竟然重叠在了一起！

如果将demo1向下的margin值设置为70，那demo1与demo2之间的距离则为70，会取最大值！

## 子元素的margin将父元素位移
[codepen示例](https://codepen.io/986191391/pen/bGKmxoz)

```html
<div class="father">
  <div class="son">son</div>
</div>
```
```css
.father {
  margin: 0;
}

.son {
  margin-top: 100px;
}
```

父元素设置了margin值为0，但是因为子元素的缘故，导致视图上父元素距离顶部存在100px的距离。

## overflow: ellipsis的隐藏条件

```html
<div class="ellipsis-demo">
  <div class="demo1">ddddddddddddddddddddddddddddddddd</div>
  <div class="demo2">ddddddddddddddddddddddddddddddddd</div>
</div>
```
```css
.demo1 {
  width: 100px;
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: pink;
}

.demo2 {
  margin-top: 50px;
  width: 100px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: pink;
}
```

同样的宽度flex布局的

## position: fixed的定位

## transform: scale()不改变dom大小

## dispaly: inline-block的margintop/bottom无效
