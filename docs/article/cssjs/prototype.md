# 原型 原型链

在 JavaScript 中，每个对象（除了 null 和 undefined）都有一个内部属性 [[Prototype]]，也称为原型或隐式原型。[[Prototype]] 属性指向另外一个对象，这个对象就是当前对象的原型。当访问一个对象的属性时，会先在该对象本身属性中查找，如果没有找到，就会去它的原型上寻找对应的属性。每个对象的原型又可以拥有自己的原型，形成原型链。

### 构造函数

在构造函数的原型上定义公用的变量和方法，这样当我们使用构造函数来创建实例时，所有的实例都能够使用该原型上的属性。


```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.run = function() {
  console.log(this.name + '跑起来了')
}
Person.prototype.say = function() {
  console.log(this.name + '说：你好！')
}
let ming = new Person('小明', 15)
```

ming这个对象中并没有run和say方法，但是当我们访问ming.run时，却可以找到对应的方法数据。原因就是当访问一个对象的属性时，会先在该对象本身属性中查找，如果没有找到，就会去它的原型上寻找对应的属性。因为ming的原型上存在run和say方法，理所当然能够找到并调用了。



```javascript
let str = new String()
let arr = new Array()
let obj = new Object()
let func = new Function()
```
通过new字符串创建出来的变量，其本质都是通过构造函数创建出来的，这个变量自然也应该存在[[prototype]]属性。
