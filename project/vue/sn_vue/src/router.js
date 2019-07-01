import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home.vue'
import Recommend from './components/recommend.vue'
import Login from './components/Login.vue'
import Game from './components/game.vue'
import Live from './components/live.vue'
import Me from './components/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Me',component:Me},
    {path:'/Live',component:Live},
    {path:'/Game',component:Game},
    {path:'/Recommend',component:Recommend},
    {path: '/Home',component: Home},
    {path:'/',component:Login}
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
