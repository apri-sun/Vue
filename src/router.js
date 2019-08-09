import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import NewsList from './components/home/newslist.vue'
import News from './components/home/news.vue'
Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/search", component: SearchContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/vip", component: VipContainer },
        { path: "/home/newslist", component: NewsList },
        { path: "/home/newslist/:id", component: News },
    ],
    linkActiveClass: "mui-active",
})

export default router