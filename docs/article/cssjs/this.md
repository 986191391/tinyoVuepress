# this

[this - 阮一峰](https://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

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

可以通过以下几点来记忆有关this指向的问题
- 如果一个函数有this，但是它没有被上一级对象所调用，严格模式下 this 指向 undefined， 否则指向window
- 如果一个函数中有this，这个函数有被上一级所调用，那么它指向的就是调用它的对象。
- 如果是一个链式的调用，则最内层的this指向最后一个调用他的对象


### 与this有关

#### 箭头函数
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

#### this指向
通过call / apply / bind方法是可以修改this的指向的。

```javascript
  let a = {
    func1: function() {
      console.log('inside func');
    }
  }

  function func1() {
    console.log('outside func')
  }

  setTimeout(function(){
    this.func1()
  }.apply(a),100);

  setTimeout(function(){
    this.func1()
  }.call(a),100);

  //bind()方法创建一个新的函数 需要手动调用
  setTimeout(function(){
    this.func1()
  }.bind(a)(),100);

  // 举例一个我实际应用的例子: 用于精准判断指向的变量数据类型
  Object.prototype.toString.call({}) // '[object Object]'
```

#### 关键字 new

new实际是一个过程，该过程中也离不开this的知识！
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

1. 创建一个空对象 obj;
2. 将新创建的空对象的隐式原型指向其构造函数的显式原型。
3. 执行构造函数，并使用call将this指向创建的obj对象。
4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。