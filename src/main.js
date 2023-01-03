import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui'
import './permission' // permission control
import 'element-ui/lib/theme-chalk/index.css'
import '../src/utils/rem'
import './css/global.scss' // 全局css样式
import './plugins/vant'
import 'vant/lib/index.css'
import * as R from 'ramda'
import * as _ from "lodash";
import 'moment'
// lodash
// moment

Vue.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|ios|IEMobile/i.test(navigator.userAgent)

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ message: msg, type: "success", customClass: this.isMobile && 'mobile-message' });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ message: msg, type: "error", customClass: this.isMobile && 'mobile-message' });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info({ message: msg, customClass: this.isMobile && 'mobile-message' });
}
Vue.prototype.$R = R;

let loadingService;
Vue.prototype.$showLoading = function(title, isShowBackground) {
  loadingService = Loading.service({
    lock: true,
    text: title || '加载中...',
    spinner: 'el-icon-loading',
    background: isShowBackground ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255,255,255,0)'
  });
};
Vue.prototype.$hideLoading = function() {
  loadingService && loadingService.close();
};

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
