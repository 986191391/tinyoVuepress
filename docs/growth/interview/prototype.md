# 原型 原型链

理解感觉很简单，要把理解的用文章写出来真的感觉好难啊TAT

### 构造函数

构造函数就像是一个生产机器，在生产产品时规定好产品的一些特色，即可按照想要的模样生产出来。如下所示

```javascript
  // 创建一个记录人物信息的构造函数
  function Person(name, age) {
    this.name = name
    this.age = age
  }

  let ming = new Person('小明', 15) // { name: '小明', age: 15 }
```
构造函数一般都是大写开头定义的，在调用构造函数时，需要使用到new关键字，返回一个对象。构造函数中的this指向它的实例。



将ming这个实例log出来，细心的人会发现，小明的这个对象中还有一个[[Prototype]]属性，这是怎么回事。点开看看。

![在这里插入图片描述](https://img-blog.csdnimg.cn/a0b3dbb5772f48dd91e1802dfbe92cb7.png)


点开[[Prototype]]后发现是空的，仅有一个constructor属性，里面还有一层[[Prototype]]。再打开往下看，<br>

![在这里插入图片描述](https://img-blog.csdnimg.cn/37e12fb4f2e44fef8d257bcbaf757260.png)


hasOwnProperty/propertyIsEnumerable/valueOf...等等，这些方法不就是对象的方法吗，原来对象的这些方法被定义在了这里。

那么问题就来了，这个[[Prototype]]是什么呢？

### prototype 
prototype又称之为原型，原型是用来做什么的呢？谁才会有原型这个属性？

每个构造函数都存在属于自己的原型属性，根据构造函数的功能性可以在原型中添加不同的公用方法或者公用变量。例如：

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
![在这里插入图片描述](https://img-blog.csdnimg.cn/7bade1254f4745358c08ea17063a5928.png)

这个时候log就发现，在刚刚的第一层[[prototype]]里还是空的，现在却多了run和say方法。
![在这里插入图片描述](https://img-blog.csdnimg.cn/a619f6a04c18488cb0bd7bb844eee5f1.png)

所以再之后，只要是通过person这个构造函数创造出来的实例，都会拥有say和run方法。都存放在构造函数的原型中。

---
引用数据类型的变量也存在[[prototype]]原型属性！
使用构造函数的时候都会用到一个关键字`new`，定义`引用数据类型`的变量时其实也是可以通过`new`字符来实现的，看看下面的例子：

```javascript
let str = new String()
let arr = new Array()
let obj = new Object()
let func = new Function()
```
将他们在控制台中打印出来，打开属性查看都会发现他们也都存在[[prototype]]这个属性。
通过new字符串创建出来的变量，其本质都是通过构造函数创建出来的，这个变量自然也应该存在[[prototype]]属性。


### 原型链
还是以小明作为例子

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
![在这里插入图片描述](https://img-blog.csdnimg.cn/e13a6c839382410cb799819e126ab922.png)
从图中可以看出，小明对象本身存在属性age和name，在小明对象原型上存在say和run方法，小明对象原型的原型(即Object对象原型)则存在操作Object的公用方法。

在执行ming.hasOwnProperty(‘age')方法时，会在小明对象本身上寻找hasOwnProperty方法，无果则通过`原型链`向上来到小明对象原型中寻找，在这里也没找到该方法，则再向上来到Object对象原型中找到了所有对象公用的hasOwnProperty方法。这一链路则称为`原型链`。

如果执行ming.say()方法时，通过原型链在小明对象原型中就找到了say方法，所以就不会再依据原型链继续查找了。

原型链的顶层就是Object对象原型了，再往上查找prototype返回的则是null。