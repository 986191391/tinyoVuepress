# 取色器

```js
javascript:(async function(){let a = new EyeDropper();const result = await a.open();alert('取色结果:' + result.sRGBHex)})();
```

将以上代码复制，在浏览器中添加书签，粘贴至书签的网址。点击对应书签即可调用取色器功能，得到你想要的颜色结果！

尝试一下：
<button onclick="(async function(){let a = new EyeDropper();const result = await a.open();alert('取色结果: ' + result.sRGBHex)})();">点击取色</button>
