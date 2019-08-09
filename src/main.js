import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import app from './app.vue'
import './css/main.scss'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
})