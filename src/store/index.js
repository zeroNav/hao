import Vue from 'vue'
import Vuex from 'vuex'
import { getCats } from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        linkCats: [],
        timeStamp: null
    },
    mutations: {
        'set/timeStamp'(state) {
            /* 设置数据版本--与当前时间戳挂钩 */
            state.timeStamp = Date.now()
        },
        'push/cats'(state, payload) {
            if (Array.isArray(payload)) {
                state.linkCats = payload
            }
        }
    },
    actions: {
        getLinkCats({ commit,state }) {
            if (state.linkCats.length) {
                let diff = Date.now() - state.timeStamp;
                if (diff < 60*1000) {
                    /* 限时1分钟 */
                    return;
                }
            }
            console.log(Date.now())
            getCats().then(res => {
                commit('push/cats', res)
                commit('set/timeStamp')
            })
        }
    }
})