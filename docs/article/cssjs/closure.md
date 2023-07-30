# 深入理解JS闭包

参考文章：[闭包 - 阮一峰](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

如果经常去读别人的代码，就会发现闭包这东西基本都藏在每一个关键的知识点中。<br>
闭包（closure）是Javascript语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。而能不能理解并运用在自己的项目中，成为衡量一个程序员是否成长的标准。


<!-- 简单来说，就是在一个函数内部声明的变量或函数可以被外部访问。 -->

用以下几个步骤来理解闭包：

## 变量的作用域

要理解闭包，首先必须理解Javascript特殊的变量作用域。

变量的作用域无非就是两种：全局变量和局部变量。

Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。

```js
var n=999;

function f1(){
　　alert(n);
}

f1(); // 999
```
在函数外部自然无法读取函数内的局部变量。

```js
function f1(){
　　var n=999;
}

alert(n); // error
```

## 如何从外部读取局部变量

出于种种原因，我们有时候需要得到函数内的局部变量。但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。

那就是在函数的内部，再定义一个函数。
```js
function f1(){
　　var n=999;
　　function f2(){
　　　　alert(n); // 999
　　}
}
```
函数f2就被包括在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。但是反过来就不行，f2内部的局部变量，对f1就是不可见的。这就是Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，我们就可以在f1外部读取它的内部变量了！

```js
function f1(){
　　var n=999;
　　function f2(){
　　　　alert(n);
　　}
　　return f2;
}
var result=f1();
result(); // 999
```

## 闭包的概念
闭包是指函数和它所处的环境（定义时的作用域）一起组成的实体。

在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。



<!-- 
JavaScript 中的函数都有一个内部属性 [[Scope]]，用于存储这个函数所在的作用域链。当函数执行完毕后，其内部声明的变量仍然存在，只是无法被外部访问到，因为作用域链已经销毁了。如果要让函数内部变量持久化，我们就需要使用闭包。

使用闭包的方法是在一个函数内部再返回一个函数，这样就可以将内部变量保存下来了。如下例子：
```javascript
function add(x) {
  return function(y) {
    console.log(x+y);
  }
}

const add5 = add(5); // 接收一个参数x，并返回一个新函数
add5(3); // 在新函数中传递参数y
```
闭包可以帮助我们将函数相关的变量隐藏起来，避免变量被外部篡改，并且可以让我们在一定程度上模拟面向对象编程中的私有成员和方法。但是需要注意，当闭包引用的变量发生变化时，会影响到整个应用程序的执行效率和内存消耗，所以在使用闭包时应该谨慎权衡利弊。

### 变量的作用域
在一个作用域中使用了另一个作用域的变量，这是我对闭包最简单的一个表述。<br>
而在这当中最重要的就是`作用域`这个知识点。

变量的作用域无非就是两种：全局变量和局部变量。
```javascript

var cool = '全局变量'

function func() {
  var instr = '局部变量‘
  outstr = '全局变量' // 实际上声明了一个全局变量
}

```

### 在外部读取局部变量

```javascript
function f1(){
  var n = 999;

  return function() {
    alert(n)
  }
}

var result = f1()
result() // 999
```

通过以上的方法，在函数f1内定义一个子函数，子函数中引用函数内部的局部变量n，最后再将这个子函数返回。<br>
因为只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。 -->

### 闭包案例

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。闭包返回的变量不会在调用结束后，被垃圾回收机制（garbage collection）回收。所以不能滥用闭包，否则会造成网页的性能问题.

1. [防抖和节流](/csdn/utils/debounceThrottle.html)函数<br>
2. 使用闭包设计单例模式
3. bind方法的实现
```js
// getName 的 this指向foo对象
let foo = {
  name: 'jill'
}
function getName () {
  console.log(this.name)
}
Function.prototype.myBind = function (obj) {
  // 将当前函数的this 指向目标对象
  let _self = this
  return function () {
    return _self.call(obj)
  }
}
 
let getFooName = getName.myBind(foo)
getFooName() // jill
```
4. vue 的data 是一个函数的原因
5. vue2双向绑定的原理，for in遍历data数据劫持的过程中，定义的变量取得的当前值也是通过闭包来保存，不会被清除， get/set时修改的也是该值。
6. 以下以前的写法
```javascript
for (var i = 0; i < 5; i++) {
  console.log('直接打印', i);
  (function(i) {
    setTimeout(() => { console.log('延迟打印', i) });
  })(i); // 包裹一层立即执行函数，创建一个作用域
}
```

## 自我概述

理解闭包，分为几点：

**第一点** 要理解变量的作用域，变量分为全局变量和局部变量，在全局作用域下创建的变量称为全局变量，在局部作用域下创建的变量称为局部变量。

我们通常将window作为全局作用域，在全局作用域下，可以通过不同的方式创建局部作用域，例如定义一个函数（在 ES6 中使用 let 或 const 关键字声明的变量会具有块级作用域）等。在这些局部作用域中，可以访问本身作用域内定义的变量和方法，也可以通过作用域链的方式访问到上一级作用域的变量和方法，直至访问到最顶层。

一般情况下，在全局作用域或其他作用域中是不能对局部作用域内的变量和方法进行访问的。想要在全局作用域或其他作用域中访问局部作用域，就需要通过一些非常规手段来完成，也就是`闭包`。

**第二点** 就是实现访问局部作用域的方法。

```js
let globalNum = 1;
function funA() {
  let aNum = 0;
  function funB() {
    console.log('globalNum', globalNum);
    console.log('aNum', aNum);
  }
}
```

在全局作用域下定义一个方法funA, funA方法执行的区域称为局部作用域A，在A作用域内定义一个方法funB, funB方法执行的区域称为局部作用域B，在局部作用域B 中可以访问自身的属性，同时也可以通过作用域链的方式访问到局部作用域A和到全局作用域的属性和方法。


```js
let globalNum = 1;
function funA() {
  let aNum = 0;
  function funB() {
    console.log('globalNum', globalNum);
    console.log('aNum', aNum);
  }
  return funB
}
let getAttr = funA();
getAttr();
```

当我们将funB作为funA方法的返回值，并在全局作用域下定义一个变量将其保存。通过这种方法就可以实现想要的效果。

