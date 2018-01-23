import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import './style/index.scss'

new Vue({
    el: '#app',
    render: h => h(App)
})