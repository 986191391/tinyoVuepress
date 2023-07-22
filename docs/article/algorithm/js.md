# JS题

## 变量什么提前考察

```js
function cool(a) {
    console.log(a);
    function a() {}
    var a = 2;
    console.log(a)
}
cool()
```
变量申明提前的题目需要注意两点：

1. 同名的变量和函数的声明，函数的提前优先于变量。
2. var 定义变量的申明提前的关键前提是，该变量未被定义。

该题的输出结果是 function 2


## 事件循环的输出结果考察


```js
async function async1 () {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2 () {
  console.log('async 2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('promise 1');
  resolve();
}).then(() => {
  console.log('promise 2');
})

console.log('script end');
```

主要考察 promise 定时器的回调执行顺序，需要注意的有几点：

1. promise的第一部分是同步执行的，then函数才是异步。
2. 微任务和宏任务的优先级。
3. async 的异步函数中，在await之前的部分属于同步任务，await后的属于异步，类似于then。

该题的输出结果为： script start -> async1 start -> async 2 -> promise 1 ->  script end -> async1 end -> promise 2 -> setTimeout


## 隐式转换
```js
var num1 = 10;
var num2 = '20';
var num3 = num1 + (num2 > 10);
console.log(num3); // 11

if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```


## 数据类型值的引用考察

```js
var foo = { bar: 1 };
var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1);
arr2[0]++;
arr2[1].bar++;
foo.bar++;
arr1[2].bar++;

console.log(arr1[1] === arr2[0]); 
console.log(arr1[2] === arr2[1]);
console.log(foo.bar);
```

主要考察的是对象和数组此类引用数据类型值的引用，最后的输出结果为 false  true  4


