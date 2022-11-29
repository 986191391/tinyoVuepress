# Promise中断(过程中穿插用户操作)

Promise可以通过then的操作来实现链式的调用

在这个过程中如何穿插一下用户的操作(例如选择选项，输入内容)从而进行中断，直到用户操作结束后再继续往下执行呢。

接下来通过Promise来实现此效果

```javascript
let callBack = null;

const clickFunc = () => {
	new Promise((resolve1) => {
		resolve1('111'); // 正常的promise执行
	}).then((res1) => {
		console.log('res1', res1); // log第一步的返回值
		return new Promise((resolve2) => {
			callBack = (param) => resolve2(param);
			// 以下两行 插入用户操作 模拟调用函数
            let content = prompt('请输入'); 
            callBack(content);
		})
	}).then((res2) => {
		console.log('你输入的内容是', res2); // log用户输入的内容
	})
}
```

也可以加多一个变量来控制某些modal的显示，然后在点击modal的确认按钮时触发callBack方法也可以达到一样的效果！