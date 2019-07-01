import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home.vue'
//import recommend from './components/recommend.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Home',component: Home},
    {path:'/',component:Login}
    //{path:'/',component:recommend},
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //},

  ]
})
