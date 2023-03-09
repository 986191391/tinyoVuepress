# 双向绑定

## 什么是MVVM
 
即是所谓的双向数据绑定
特点： 数据影响视图，视图影响数据
## 实现的方式

 数据劫持 + 发布订阅模式

## vue 不兼容低版本浏览器

基于es5，Object.defineProperty方法

## Object.defineProperty
 
 通过该方法，可以实现对对象中的某一个值设置对应的配置，例如
 1. configurable: 是否可以删除，默认为false不可删除。设置为false时不可删除对象内的值
 2. writable: 是否可以修改
 3. enumable: 是否可以枚举(遍历)
 4. value: 对象中该属性的值
 5. set(): 当对对象中该值进行修改时触发该方法
 6. get(): 当获取对象中该值时触发该方法

```javascript
// ！！： get 和 set 方法和writable value属性不可同时存在
 Object.defineProperty(data, key, {
   enumerable: true,
   configurable: true,
   get() {
     return data[key]
   },
   set(newVal) {
     if (data[key] === newVal) return
   }
 })
```


## 数据劫持 Observe(观察)

使用Object.defineProperty来定义所有的属性。

Vue是一个构造函数，它接受一个对象。在定义一个简单的vue时一般可以这么写：

```javascript
	let vue = new Vue({
		el: 'app',
		data: {
			a: 1
		}
	})
```
在接收到对象后，会对对象中的data数据执行一个observe方法，在方法中给对象的data值循环调用Object.defineProperty方法，从而实现对data对象中所有数据的劫持。(即当数据发生改变或者被调用是可被监听)

但是问题来了，当data中的数据出现多层级时，应该怎么处理？

```javascript
data: {
	a: {
		b: 2
	}
}
```
所以在遍历的时候，当前遍历的属性值为对象时，同时也需要对该对象的值进行遍历，这里就需要进行递归了。

## 第一阶段代码(完成对数据的劫持)

```javascript

// 定义一个vue
let vue = new Vue({
  el: '#app',
  data: {
    a: {
	  a: 1
	},
	b: 2
  }
})

// vue构造函数
function Vue(options) {
  this.$options = options
  this.data = options.data

  observe(this.data)
}

// 观察(完成数据劫持)
function observe(data) {
  for (let key in data) {
    let val = data[key] // 涉及闭包的知识哦，该值不会被清除， get/set时修改的也是该值
    // 递归，如果遍历的过程中的当前项是对象，则也需要对该项的每一项进行数据劫持
    if (!!val && Object.prototype.toString.call(val) === '[object Object]') {
      observe(val)
    }
    
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(newVal) {
        if (val === newVal) return
        val = newVal
        // 如果新值为对象，也需要对对象中的属性进行数据劫持
        if (Object.prototype.toString.call(val) === '[object Object]') {
          observe(val)
        }
      }
    })
  }
}
```

## 数据代理
 
完成了以上步骤以后可以发现，当需要获取数据时，取值的方式是这样的`vue.data.a`，但实际在使用VUE时是这样的`vue.a`，所以需要将data的数据映射在vue对象上，进行一个所谓的***数据代理***

```javascript
// 在Vue构造函数中添加数据代理部分即可
function Vue(options) {
  this.$options = options
  this.data = options.data

  observe(this.data) // 数据劫持

  // 数据代理
  for(let key in this.data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal
      }
    })
  }
}
```
在set方法中，不需要再执行`if (val === newVal) return`，也不需要再判断新值是否为对象。

当数据代理时触发get和set方法，实际也是取得了data数据中对应的值。而这些值在数据劫持时已经设置了对应的判断逻辑。所以在这一步，只需进行代理即可。

```javascript
// 将数据代理抽成方法
function Vue(options) {
  this.$options = options
  this.data = options.data

  observe(this.data) // 数据劫持
  dataProxy(this.data, this.$vm) // 数据代理
}

function dataProxy(data, vm) {
  for(let key in data) {
    Object.defineProperty(vm, key, {
      enumerable: true,
      configurable: true,
      get() {
        return data[key]
      },
      set(newVal) {
        data[key] = newVal
      }
    })
  }
}
```

## 编译模版
 
一个最简单的例子，就是将html中vue对应的语法糖数据替换成我们data中的数据
例如
```html
<div>{{a.a}}</div>
<!-- 或者 -->
<div>{{b}}</div>
```

简述一下具体步骤