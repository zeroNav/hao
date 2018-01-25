import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import './style/index.scss'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})