# 路由守卫

可以分为三种：全局守卫、独享守卫、组件内守卫

### 全局守卫

- router.beforeEach<br>

全局前置路由守卫，每次路由切换之前被调用。在这里可以做类似于路由白名单、权限拦截、token有效期检验等。

- router.afterEach<br>

全局后置路由守卫，每次路由切换之后调用, 可用于切换document.title


### 独享守卫

- router.beforeEnter<br>

独享路由守卫，只有前置，没有后置，写在routes配置项里。


### 组件内守卫


- router.beforeRouteEnter<br>

组件内路由守卫, 写在组件中，路过路由规则进入该组件时被调用。<br>

- router.beforeRouteLeave<br>

组件内路由守卫, 写在组件中，路过路由规则离开该组件时被调用。<br>
可用于记录一些组件在离开时的状态。

keep-alive的替代方案之一，页面离开时可以记录滚动的位置，在进入后手动滚动到对应的位置。
