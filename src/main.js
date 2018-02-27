import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
const iView = require('iview')
import 'iview/dist/styles/iview.css'
import App from './app.vue'
import './style/index.scss'
// import iView from 'iview'

Vue.use(iView)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})