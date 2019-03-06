import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.config.productionTip = false

const router = new VueRouter({
    routes: 
    [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ],
    mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
