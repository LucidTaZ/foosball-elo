import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import PlaygroundPage from './containers/PlaygroundPage.vue'
import HomePage from './containers/HomePage.vue'
import PlayersPage from './containers/PlayersPage.vue'
import MatchesPage from './containers/MatchesPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/playground', component: PlaygroundPage },
    { path: '/', component: HomePage },
    { path: '/players', component: PlayersPage },
    { path: '/matches', component: MatchesPage }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
