# Vue基本知识

## 双向绑定的原理
好东西不能藏着，这个视频教学思路清晰透明，看不懂的话多看两次！[Vue MVVM原理](https://www.bilibili.com/video/BV1u4411W7ei?p=7)


## Vue的生命周期及阶段详解
官方的vue生命周期图，来自[vue生命周期图](https://cn.vuejs.org/v2/guide/instance.html)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311231800359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dvblRpbnlCbGFjaw==,size_16,color_FFFFFF,t_70)

```javascript
// vue生命周期
beforeCreate
created
beforeMount
mounted
updated
beforeUpdate
updated
beforeDestroy
destroyed
// 使用了keep-alive 后存在这两个生命周期
activated
deactivated
```


- beforeCreate的时候，数据/事件还未初始化，无法访问到数据和真实到dom。

- beforeCreated —> created 这一段时间内，进行初始化事件和数据。

- created的时候，数据和事件已经初始化了，在这个阶段可以对数据进行更改，在这里更改数据不会触发updated函数。

- created —> beforeMounted 这一段时间内，会先判断vue内有没有el这个元素，如果有则继续往下执行，如果没有则停止编译，直到在该vue实例上调用vm.$mount(el)。

然后会进行判断，在vue对象中有没有定义template，如果有的话则使用定义的template作为模版，如果没有则定义使用vue的el属性绑定的dom区域作为模版。


- beforeMount —> mounted 这一段时间内，开始编译模板 (下面一个板块Vue的编译过程)，挂载$el。替换真实节点。

- mounted ---> 挂载完成，模板中的html渲染到了页面中，mounted只会执行一次。这个时候页面的事件和数据都已经挂载了，真实dom也渲染好了。在这一步可以执行DOM操作。

在vue的对象中，当data的值发生改变时就会先调用beforeUpdate函数。

- beforeUpdate --> updated vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染。渲染完以后就会执行updated钩子函数。

- beforeDestroy钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。


## Vue的编译过程 
[学习视频](https://www.bilibili.com/video/BV1Rf4y1S7RN?p=7)
参考： [Vue.js的template编译过程](https://segmentfault.com/a/1190000018185672)<br>

解析器(parse) - 将 模板字符串 转换成 element ASTs
优化器(optimize) - 对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化
代码生成器(generate) - 使用 element ASTs 生成 render 函数代码字符串

AST(abstract syntax tree 抽象语法树), 是源代码的抽象语法结构的树状表现形式。

**解析器(parse)**
parse 的目标是把 template 模板字符串转换成 AST 树，它是一种用 JavaScript 对象的形式来描述整个模板。那么整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的

**优化器(optimize)** 
通过 optimize 把整个 AST 树中的每一个 AST 元素节点标记了 static 和 staticRoot, optimize 的过程，就是深度遍历这个 AST 树，去检测它的每一颗子树是不是静态节点，如果是静态节点则它们生成 DOM 永远不需要改变

**代码生成器(generate)**
把优化后的 AST 树转换成render函数，render函数转换成虚拟dom，然后在打入真实节点



## Vue常用的组件通信方式
参考： [Vue组件通信](https://www.jb51.net/article/167304.htm)

一、父子间通信 props / $emit


父组件
```html
  <sonComponent :msg="msg" @sonEmit="getSonEmit"></sonComponent>
```
子组件
```javascript
// script定义props接受父组件的传值
props: ['msg']

this.$emit('sonEmit', this.sonValue);
```
父亲组件通过 :值 的方式将值传递给子组件，子组件在props中定义并接住父组件传递的值。

子组件通过调用$emit传递一个名称和值，在父亲组件中用@名称的形式定义一个方法，并在方法中接住子组件传递过来的值


二、EventBus （参考自标题文章）

eventBus  又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。eventBus也有不方便之处, 当项目较大,就容易造成难以维护的灾难

```javascript
// event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()
```

```javascript
// 需要在组件中先引入EventBus
import {EventBus} from './event-bus.js'

// 在代码中调用即可
EventBus.$emit('addition', {
	num: 5 // 可以传入当前组件的变量
})

// 响应
EventBus.$on('addition', param => {
	this.count = this.count + param.num;
})

// 移除该事件
EventBus.$off('addition', {})
```

三、Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。分为五个模块：

state类似与vue的data，用于数据的存储。
getter类似与computed，计算属性。基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算。
mutation中定义了同步的方法，通过它来修改state，是修改state数据的唯一途径。
action中定义了异步的方法，一般用于请求，可以通过调用mutation来修改state。
modules用于项目中将各个模块的状态分开定义和操作，便于维护。

将需要进行通信的数据存储在store中，需要数据的组件通过连接store获取state的值即可实现组件间的通信。该方式可实现全部组件的通信。

四、localStorage / sessionStorage
该方法是最常见的组件通信方法之一了。在不同的组件，跨页面都可以进行通信的一种方式。
```javascript
// 存储的两种方式
localStorage.setItem("isConfirm", "true");
localStorage.isConfirm= "true";

// 读取
localStorage.getItem("isConfirm");
localStorage.isConfirm; 
```

```javascript
// 存储的两种方式
sessionStorage.setItem("isConfirm", "true");
sessionStorage.isConfirm= "true";

// 读取
sessionStorage.getItem("isConfirm");
sessionStorage.isConfirm; 
```


## keep-alive

参考：[keep-alive](https://blog.csdn.net/caimingxian401/article/details/96333531)
通过vue cli 创建了一个工程，在该工程的app.vue中

```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
```
是这个样子的，点击了router-link会根据路由，在router-view中显示对应路由的组件内容，想要添加缓存，则需要修改成以下样子

```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
```
意思是如果我们在router配置了keepAlive为true，则会使用keep-alive区域内的router-view，从而数据就会进行缓存了！相反则使用keep-alive外的router-view。

当然，前提是我们必须先在router中配置好keepAlive

```javascript
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  }
]
```
这样子的话，两个页面之间互相切换，都可以进行值的缓存了！


## v-if 和 v-show 的区别
当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。
当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。


## computed 和 watch 的区别
**computed**是计算属性，需要依赖一个数据，基于data中声明过或者父组件传递的props中的数据通过计算得到的值，当依赖当数据发生改变时，会重新进行计算得到新值。是不支持异步的。如果computed的属性值是函数，那么默认会调用get方法，函数的返回值就是属性值。

**watch**是一个监听函数，如下，watch是支持异步的。当他监听的属性发生改变时则会调用这个监听方法handler，该监听方法接收两个参数，一个值属性改变后的值，一个是修改前的值。还可以为该监听方法定义两个属性，deep和immediate。immediate为true时，则组件一加载就立即触发handler函数的执行。deep为true时，进行深度监听，为了发现对象内部值的变化，复杂类型的数据时使用。

```javascript
watch: {
	cityName: {
		handler(newName, oldName) {},
		deep: true,
		immediate: true
	}
} 
```

## nextTick
[简单理解Vue中的nextTick](https://www.jianshu.com/p/a7550c0e164f)

## Vue 虚拟DOM
真的是一篇好文章啊！[vue虚拟dom](https://www.jianshu.com/p/af0b398602bc)

[虚拟DOM](https://segmentfault.com/a/1190000011531094)

Vue源码中虚拟DOM构建经历 template编译成AST语法树 -> 再转换为render函数 最终返回一个VNode(VNode就是Vue的虚拟DOM节点)


## Vue Router
[Vue Router 官方文档](https://router.vuejs.org/zh/guide/#html)


## Vuex
参考：[Vuex 官方文档](https://vuex.vuejs.org/zh/)

