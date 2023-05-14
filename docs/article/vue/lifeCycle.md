# Vue生命周期

## 生命周期是什么？
Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

## vue2生命周期

![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca74f183827f46~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)


| 生命周期        | 描述           |
| ------------- |:-------------:|
| beforeCreate | 实例被创建之前执行，此时data和methods等属性都还不能访问，一般用于全局注入或者是自定义插件化等场景。 |
| created      | 实例已经创建完成后执行，此时该实例的data、computed、methods等属性都已经可以访问了，但DOM相关的操作还未开始。适合发起初始化xhr请求。   |
| beforeMount | 在实例挂载到DOM元素前执行，此时template和render函数都已被编译为虚拟节点（VNode）但并未渲染到页面。可以将一些需要依赖DOM的操作放在这个钩子中。   |
| mounted | 实例已经挂载到DOM元素上，此时可以通过vm.$el获取到指定的DOM节点，一般用于初始化页面数据或与第三方库交互，比如初始化swiper。 |
| beforeUpdate | 在数据更新后且虚拟DOM重新渲染前调用，此时可以进一步修改数据或更新组件状态。  |
| updated | 组件更新完毕后调用，此时可以进行DOM操作，但需要注意防止无限循环更新，比如在这里再次修改组件数据。     |
| activated |  当 keep-alive 包裹的动态组件被激活时调用，此时可以做一些数据加载或修改页面状态等操作。  |
| deactivated | 当 keep-alive 包裹的动态组件被停用时调用，此时可以做一些清理工作或保存数据等操作。  |
| beforeDestory | 在组件实例被销毁前调用，可以在这里清除定时器、取消事件监听等操作。  |
| destoryed | 组件实例被销毁并清理完毕后调用，此时组件中的数据和DOM元素都已经被卸载，可以进行内存回收等操作。  |

## vue3生命周期

vue3的生命周期相比vue2有所改变

[vue3生命周期官方](https://cn.vuejs.org/guide/essentials/lifecycle.html)

![在这里插入图片描述](https://cn.vuejs.org/assets/lifecycle.16e4c08e.png)


<!-- | 生命周期        | 描述           |
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
| onErrorCaptured | 当捕获一个来自子孙组件的异常时激活钩子函数。     | -->

beforeCreate：在实例初始化之后、响应式数据初始化之前调用。
onBeforeMount：在挂载开始之前调用，即将虚拟 DOM 渲染成浏览器可识别的真实DOM节点前调用。
Render：生成虚拟 DOM（VNode）。
onMounted：在组件被挂载到DOM节点上后调用，通常用于获取DOM元素，执行一些自定义操作或者初始化某些状态等任务。
onBeforeUpdate：在数据更新之前调用，此时虚拟 DOM 还未重新渲染。
Render：重新生成虚拟 DOM（VNode），并对比新旧 VNode，最终生成一个补丁 patch 用来修改老的 VNode 使其和新的 VNode 保持一致。
onUpdated：在组件更新完成之后调用，通常可以在此时执行其他的操作，如更改外部API加载的数据等。
onBeforeUnmount：在卸载开始之前调用，通常用于清除计时器，解绑非vue插件事件等操作。
onUnmounted：在组件卸载之后调用，通常用于解绑组件内部使用的事件等操作。
onErrorCaptured：可以获取子孙组件抛出的错误信息，如果需要处理组件函数中的错误，就可以在此钩子函数内部进行处理。请注意，这个钩子只能捕获该组件的儿子或孙子组件所发生的错误，而不是其他组件的错误。


## 组合式 API：生命周期钩子​

[组合式 API：生命周期钩子​](https://cn.vuejs.org/api/composition-api-lifecycle.html)

组合式 API 是 Vue 3 中的一项新功能，通过提供新的 Vue 函数和 setup 函数，帮助用户更方便、灵活地组织和复用组件逻辑。生命周期钩子函数是组合式 API 中必不可少的一部分，它们被用来管理组件在运行过程中的不同状态和所需要执行的操作。

在组合式 API 中，生命周期钩子函数通过相应名称的函数进行定义，例如 onMounted 代替了 Vue 2.x 版本中的 mounted。Vue 3 中常见的生命周期钩子函数包括：

onBeforeMount: 在组件挂载到页面之前被调用
onMounted: 在组件挂载到页面后被调用
onBeforeUpdate: 在组件更新之前调用
onUpdated: 在组件更新之后调用
onBeforeUnmount: 在组件销毁之前调用
onUnmounted: 在组件销毁之后调用
使用组合式 API 的过程中，需要注意以下几点:

生命周期钩子函数必须被调用到正确的地方才能生效，在 setup 函数中声明的各个变量在不同的阶段会发生不同的变化，如果在错误的时刻调用生命周期钩子函数，将会导致出现错误。
在组合式 API 中实现生命周期钩子函数时，需要遵循特定的书写规则，例如函数名称需要以 "on" 作为前缀。
和 Vue 2.x 版本不同，Vue 3 中的生命周期钩子函数并没有在模板中直接使用，而是在 setup 函数内部定义和调用。


<!--
## vue2与vue3生命周期比较

 ```javascript
vue2           -------      vue3
 
beforeCreate   --------      setup(()=>{})
created        --------      setup(()=>{})
beforeMount    --------      onBeforeMount(()=>{})
mounted        --------     onMounted(()=>{})
beforeUpdate   --------     onBeforeUpdate(()=>{})
updated        --------      onUpdated(()=>{})
beforeDestroy  --------      onBeforeUnmount(()=>{})
destroyed      --------      onUnmounted(()=>{})
activated      --------      onActivated(()=>{})
deactivated    --------      onDeactivated(()=>{})
errorCaptured  --------      onErrorCaptured(()=>{})
``` 

-->

