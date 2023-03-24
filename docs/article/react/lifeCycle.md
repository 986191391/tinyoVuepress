# React生命周期

参考: [详解React生命周期](https://www.jianshu.com/p/514fe21b9914)

![reactcyclt](http://43.139.113.7:81/img/reactcycle.png)

## 一、初始化阶段(initialization)
```javascript
import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
  }
}
```
即上述代码中类的构造方法( constructor() )，Test类继承了react Component这个基类，也就继承这个react的基类，所以才有render(), 生命周期等方法可以使用，这也说明为什么`函数组件不能使用这些方法`的原因。

`super(props)`用来调用基类的构造方法( constructor() ), 也将父组件的props注入给子组件，供子组件读取(组件中props只读不可变，state可变)。<br>
而constructor()用来做一些组件的初始化工作，如定义this.state的初始内容。


## 二、挂载阶段(mounting)

- componentWillMount

在组件挂载到DOM前调用，且只会被调用一次，在这边调用this.setState不会引起组件重新渲染，也可以把写在这边的内容提前到constructor()中，所以项目中很少用。

- render

根据组件的props和state（两者的重传递和重赋值，无论值是否有变化，都可以引起组件重新render），return 一个React元素（描述组件，即UI），不负责组件实际渲染工作，之后由React自身根据此元素去渲染出页面DOM。render是纯函数（Pure function：函数的返回结果只依赖于它的参数；函数执行过程里面没有副作用），不能在里面执行this.setState，会有改变组件状态的副作用。

- componentDidMount

组件挂载到DOM后调用，且只会被调用一次

## 三、更新阶段(updation)

react组件更新机制：setState引起的state更新或父组件重新render引起的props更新，更新后的state和props相对之前无论是否有变化，都将引起子组件的重新render。

## 四、卸载阶段(unmounting)