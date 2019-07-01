import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Axios from './axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

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
