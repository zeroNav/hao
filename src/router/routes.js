 /* 
 * @Author: nooldey 
 * @Author-Email: <nooldey@gmail.com> 
 * @Date: 2018-01-23 16:39:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-01-23 18:41:24
 * @Description: 路由列表
 */

import Home from '../view/home/index.vue'
import Detail from '../view/detail/index.vue'

export default [
    { 
        path: '',
        component: Home,
        children: [
            {
                path: '',
                name: 'Home Page'
            },
            {
                path: 'detail',
                name: 'Detail Page',
                component: Detail
            }
        ]
    }
    
]