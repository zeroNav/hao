import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
const iView = require('iview')
import 'iview/dist/styles/iview.css'
import App from './app.vue'
import './style/index.scss'
// import iView from 'iview'

Vue.use(iView)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})