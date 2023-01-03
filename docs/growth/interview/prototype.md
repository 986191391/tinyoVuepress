# 原型 原型链

### 构造函数

构造函数就像是一个生产机器，在生产产品时规定好产品的一些特色，即可按照想要的模样生产出来。如下所示

```javascript
  // 创建一个虚拟人的构造函数
  function Persion(name, age) {
    this.name = name
    this.age = age
  }

  let ming = new Persion('小明', 15) // { name: '小明', age: 15 }
```
构造函数一般都是大写开头定义的，在调用构造函数时，需要使用到new关键字，返回一个对象。构造函数中的this指向它的实例。

![Alt](http://43.139.113.7:8081/img/ming.jpg)<br>
细心的人会发现，小明的这个对象中还有一个[[Prototype]]属性，这是怎么回事。点开看看。

![Alt](http://43.139.113.7:8081/img/mingopen.jpg)<br>
点开[[Prototype]]后里面还有一层[[Prototype]]。再打开往下看，<br>
hasOwnProperty/propertyIsEnumerable/valueOf...等等，这些方法不就是对象的方法吗，原来对象的这些方法被定义在了这里.
<!-- 所以只要是对象都会存在一个[[Prototype]]的属性，在这个属性中定义了可以操作对象的全部公用方法！ -->



