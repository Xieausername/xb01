import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Axios from './axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//面板，可切换显示子页面
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

//行动表   操作表，从屏幕下方移入
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

// 引入swiper轮播组件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
