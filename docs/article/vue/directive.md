# Vue指令

Vue指令是一种特殊的HTML属性，用于向Vue实例添加交互性和动态性。指令以v-开头，后面跟着指令的名称，例如v-if、v-for、v-bind等。指令的值可以是JavaScript表达式，用于动态地计算指令的行为。

以下是一些常用的Vue指令：

- v-if：根据表达式的值来条件性地渲染元素。
- v-for：根据数组或对象的值来循环渲染元素。
- v-bind：将元素的属性绑定到Vue实例的数据上。
- v-on：将元素的事件监听器绑定到Vue实例的方法上。
- v-model：将表单元素的值绑定到Vue实例的数据上，实现双向数据绑定。
- v-show：根据表达式的值来条件性地显示或隐藏元素。
- v-text：将元素的文本内容绑定到Vue实例的数据上。
- v-html：将元素的HTML内容绑定到Vue实例的数据上。

指令是Vue中非常重要的一部分，它们使得开发人员可以轻松地添加交互性和动态性到应用程序中。同时，Vue还提供了自定义指令的功能，允许开发人员根据自己的需求创建自定义指令。


## 自定义指令

在Vue中，自定义指令允许开发人员创建自己的自定义行为，可以应用于DOM元素。这对于添加内置指令未提供的功能或将复杂行为封装到可重用组件中非常有用。

要创建自定义指令，您可以使用Vue.directive方法。以下是一个示例，该示例创建了一个自定义指令，当单击元素时将其背景颜色设置为红色：
```javascript
Vue.directive('red-background', {
  bind: function (el, binding, vnode) {
    el.style.backgroundColor = 'red';
  }
});
```
在上面的示例中，Vue.directive方法接受两个参数：指令名称和指令选项对象。指令选项对象可以包含多个钩子函数，例如bind，inserted，update，componentUpdated和unbind。这些钩子函数允许您在指令的生命周期中执行自定义逻辑。

例如，在上面的示例中，我们使用了bind钩子函数来设置元素的背景颜色。bind钩子函数在元素第一次绑定指令时调用。如果您想在元素插入到DOM中时执行逻辑，则可以使用inserted钩子函数。

### 钩子函数

- bind：此钩子函数在指令绑定到元素时调用。它接收三个参数：元素，绑定对象和指令附加到的虚拟节点（vnode）。您可以使用此钩子函数执行一次性设置任务，例如设置初始值。

- inserted：此钩子函数在元素插入到DOM中时调用。它接收三个参数：元素，绑定对象和指令附加到的虚拟节点（vnode）。您可以使用此钩子函数执行与DOM交互的任务，例如添加事件监听器或进行DOM操作。

- update：此钩子函数在元素的绑定值发生更改时调用，但不包括初始值。它接收三个参数：元素，绑定对象和指令附加到的虚拟节点（vnode）。您可以使用此钩子函数对元素进行更新，例如更改样式或属性。

- componentUpdated：此钩子函数在元素的绑定值发生更改时调用，包括初始值。它接收三个参数：元素，绑定对象和指令附加到的虚拟节点（vnode）。您可以使用此钩子函数执行与DOM交互的任务，例如添加事件监听器或进行DOM操作。

- unbind：此钩子函数在指令从元素上解绑时调用。它接收两个参数：元素和绑定对象。您可以使用此钩子函数执行清理任务，例如删除事件监听器或其他DOM操作。

## 举例实际场景


[8个非常实用的Vue自定义指令](https://mp.weixin.qq.com/s/nBz1cxFWceU_txQhekBPZQ)


v-focus：将焦点设置在输入框上，以便用户可以立即开始输入。这对于表单非常有用，因为它可以提高用户体验并减少用户的点击次数。
```javascript
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
});
```

v-scroll：在滚动时执行某些操作。例如，您可以使用此指令来实现无限滚动或懒加载图像。
```javascript
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
});
```

v-tooltip：在鼠标悬停在元素上时显示工具提示。这对于提供有关元素的更多信息非常有用。
```javascript
Vue.directive('tooltip', {
  bind: function (el, binding) {
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = binding.value;
    el.appendChild(tooltip);
    el.addEventListener('mouseenter', function () {
      tooltip.style.display = 'block';
    });
    el.addEventListener('mouseleave', function () {
      tooltip.style.display = 'none';
    });
  }
});

```


## Vue3

在 Vue.js 3.x 中，自定义指令的生命周期钩子分为以下几类：

beforeMount：在指令挂载到元素之前被调用。

mounted：在指令第一次绑定到元素并插入父节点后调用。

beforeUpdate：在包含组件的 VNode 更新之前调用，但是可能在其子 VNode 更新之后调用。

updated：在包含组件的 VNode 及其子 VNode 均已更新后调用。

beforeUnmount：在卸载绑定元素之前调用。

unmounted：在卸载绑定元素之后调用。

beforeBind：此函数接收了一个参数 binding: DirectiveBinding，在指令第一次绑定到元素时调用。

created：此函数在指令实例被创建时调用，可通过 binding.instance 访问组件实例，该函数在服务端渲染期间不可用。

注意：beforeBind 钩子是在指令绑定到元素之前执行的，而 beforeMount 是在指令绑定到元素后，准备挂载之前执行的。而 created 钩子是在指令实例被创建时调用的，与 beforeMount 和 mounted 钩子的调用时机略有不同。

需要注意的是，在 Vue.js 3.x 中，除了 mounted、beforeUnmount 和 unmounted 之外，其他的钩子函数不再接受 el 参数（对应指令绑定的元素），而是通过 binding.value、binding.oldValue 或 binding.arg 等参数来访问当前指令的状态和值。