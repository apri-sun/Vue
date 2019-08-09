import Vue from 'vue'
import 'mint-ui/lib/style.css'
import app from './app.vue'
import './css/main.scss'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.filter('inittime', function (msg) {
    var y = msg.getFullYear()
    var m = (msg.getMonth()+1).toString().padStart(2, "0")
    var d = msg.getDate().toString().padStart(2, "0")
    return `${y}-${m}-${d}`
})

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
})