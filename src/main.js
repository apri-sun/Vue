import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import app from './app.vue'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})