 /* 
 * @Author: nooldey 
 * @Author-Email: <nooldey@gmail.com> 
 * @Date: 2018-01-23 16:39:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-02-23 20:40:33
 * @Description: 路由列表
 */

import Home from '../view/home/index.vue'
import Category from '../view/category/index.vue'
import Detail from '../view/detail/index.vue'

export default [
    { 
        path: '',
        component: Home,
        children: [
            {
                path: '',
                name: '导航首页',
                component: Category
            },
            {
                path: 'detail',
                name: '子类页面',
                component: Detail
            }
        ]
    }
    
]