# this

## 绑定方式
this 是一个关键字，它用于引用当前函数执行时所在的对象。this 的绑定方式主要有四种：

1. 默认绑定：

如果一个函数独立调用，则默认绑定成全局对象，即 Window 对象（浏览器环境）或 global 对象（Node.js 环境）。
```javascript
function foo() {
  console.log(this);
}

foo(); // 输出 Window 对象或 global 对象。
```

2. 隐式绑定：

如果函数作为对象的方法被调用，则其中的 this 就绑定了该对象本身。
```javascript
const obj = {
  name: 'Tom',
  sayName() {
    console.log(this.name);
  },
};

obj.sayName(); // 输出 "Tom"
```

3. 显式绑定：

可以使用 call、apply 或 bind 方法显示地指定函数内部的 this 绑定到某个对象上。
```javascript
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet.call(person1); // 输出 "Hello, Alice"
greet.apply(person2); // 输出 "Hello, Bob"

const greetPerson1 = greet.bind(person1);
greetPerson1(); // 输出 "Hello, Alice"
```

4. new 绑定：

当一个构造函数被 new 关键字调用时，其中的 this 绑定到新创建的对象实例上。
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person('Tom');
console.log(person.name); // 输出 "Tom"
```

总结如下：

可以通过以下几点来记忆有关this指向的问题
- 如果一个函数有this，但是它没有被上一级对象所调用，严格模式下 this 指向 undefined， 否则指向window
- 如果一个函数中有this，这个函数有被上一级所调用，那么它指向的就是调用它的对象。
- 如果是一个链式的调用，则最内层的this指向最后一个调用他的对象

-------

每一个前端肯定都遇到过这样的鄙视题
```javascript
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // log
foo() // log
```
`this指的是函数运行时所在的环境。对于obj.foo()来说，foo运行在obj环境，所以this指向obj；对于foo()来说，foo运行在全局环境，所以this指向全局环境。` -- 教科书的标准答案。



## 与this有关

1. 箭头函数

众所周知，在箭头函数中是没有this的概念的。所以在使用箭头函数时一定要注意内部this的使用。

```javascript
  var name = 'windowname'
  var obj = {
    name: 'obj',
    fun: function() {
      console.log(this.name)
    }
  }
  var obj2 = {
    name: 'obj2',
    fun: () => {
      console.log(this.name)
    }
  }
  obj.fun() // obj
  obj2.fun() // windowname
```
悟一悟，箭头函数内部的this指向会变成 -> 最近一层非箭头函数的this<br>
这个例子中的this最近一层有效的this是obj2指向的环境，而obj2的this指向的是window。

2. this指向

通过call / apply / bind方法是可以修改this的指向的。

```javascript
function greet(name, age) {
  console.log(`Hello, I'm ${name}, and I'm ${age} years old`);
}

greet.call(null, 'Tom', 18); // Hello, I'm Tom, and I'm 18 years old

greet.apply(null, ['Tom', 18]); // Hello, I'm Tom, and I'm 18 years old

const greetTom = greet.bind(null, 'Tom');
greetTom(18); // Hello, I'm Tom, and I'm 18 years old
```
call 和 apply 方法的区别在于传入参数格式不同：call 方法接受的是一个参数列表，而 apply 方法接受的是一个参数数组。bind 方法则会返回一个新函数。


3. 关键字 new

new实际是一个过程，该过程中也离不开this的知识！new 操作符在执行时会经过以下几个步骤：

1. 创建一个新对象；<br>
2. 将函数内部的 this 绑定到新对象上；<br>
3. 执行函数内部的代码，对新对象进行初始化操作；<br>
4. 如果构造函数中显式返回了一个对象，则直接返回该对象；如果没有，则默认返回刚刚创建的新对象。


```javascript
var a = new MyFunction("Li",18);

function MyFunction(name, age) {
  this.name = name;
  this.age = age;
}

new MyFunction {
  var obj = {};
  obj.__proto__ = myFunction.prototype;
  var result = myFunction.call(obj, "Li", 18");
  return typeof result === 'object' ? result : obj;
}
```
<!-- 
1. 创建一个空对象 obj;
2. 将新创建的空对象的隐式原型指向其构造函数的显式原型。
3. 执行构造函数，并使用call将this指向创建的obj对象。
4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。 -->