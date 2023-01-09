# JS继承

### 构造继承

```javascript
function Father() {
  this.name = 'father'
}

Father.prototype.talk = function() {
  console.log('i am father')
}

function Son() {
  Father.call(this)
}

let son = new Son()
```
通过call或者apply方法指向自己执行父类的方法, 通过这种方式可以继承父类构造函数的属性, 但是不能继承原型链上的属性。


### 原型链继承

```javascript
function Father() {
  this.name = 'father'
}

Father.prototype.talk = function() {
  console.log('i am father')
}

function Son() {}
Son.prototype = new Father()

let son = new Son()
```
将子类的原型设置为父类构造函数的实例, 通过这种方式实现继承父类