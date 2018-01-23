import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = {
    // mode: 'hash',
    // base: ''
}

export default new Router({
    ...router,
    routes
})