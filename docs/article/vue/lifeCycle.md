# Vue生命周期

## 生命周期是什么？
Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

## vue2生命周期
| 生命周期        | 描述           |
| ------------- |:-------------:|
| beforeCreate      | 组件实例被创建之初，组件的属性生效之前 |
| created      | 组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用      |
| beforeMount | 在挂载开始之前被调用：相关的 render 函数首次被调用      |
| mounted | el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子     |
| beforeUpdate | 组件数据更新之前调用，发生在虚拟 DOM 打补丁之前     |
| updated | 组件数据更新之后     |
| activited | keep-alive 专属，组件被激活时调用     |
| deactivated | keep-alive 专属，组件被销毁时调用     |
| beforeDestory | 组件销毁前调用     |
| destoryed | 组件销毁后调用     |


## vue2生命周期图
图中标明了每一个步骤所做的事情，可以放大细看！

![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca74f183827f46~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)


## vue3生命周期

vue3的生命周期相比vue2有所改变


| 生命周期        | 描述           |
| ------------- |:-------------:|
| setup      | 开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method |
| onBeforeMount      | 组件挂载到节点上之前执行的函数    |
| onMounted | 组件挂载完成后执行的函数      |
| onBeforeUpdate | 组件更新之前执行的函数     |
| onUpdated | 组件更新完成之后执行的函数   |
| onBeforeUnmount | 组件卸载之前执行的函数     |
| onUnmounted | 组件卸载完成后执行的函数   |
| onActivated | 被包含在 keep-alive 中的组件，会多出两个生命周期钩子函数，被激活时执行   |
| onDeactivated | 比如从 A 组件，切换到 B 组件，A 组件消失时执行     |
| onErrorCaptured | 当捕获一个来自子孙组件的异常时激活钩子函数。     |


## vue2与vue3生命周期比较

```javascript
vue2           ------->      vue3
 
beforeCreate   -------->      setup(()=>{})
created        -------->      setup(()=>{})
beforeMount    -------->      onBeforeMount(()=>{})
mounted        -------->      onMounted(()=>{})
beforeUpdate   -------->      onBeforeUpdate(()=>{})
updated        -------->      onUpdated(()=>{})
beforeDestroy  -------->      onBeforeUnmount(()=>{})
destroyed      -------->      onUnmounted(()=>{})
activated      -------->      onActivated(()=>{})
deactivated    -------->      onDeactivated(()=>{})
errorCaptured  -------->      onErrorCaptured(()=>{})
```