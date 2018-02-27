import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './style/index.scss'

Vue.use(iView)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})