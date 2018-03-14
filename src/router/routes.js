/* 
* @Author: nooldey 
* @Author-Email: <nooldey@gmail.com> 
* @Date: 2018-01-23 16:39:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-03-14 23:01:56
* @Description: 路由列表
*/
/* 导入组件 */

import Layout from '../view/layout/index.vue'
import Home from '../view/home/index.vue'
import Detail from '../view/detail/index.vue'
import AddLink from '../view/add/index.vue'

/* 输出路由 */
export default [{
    path: '',
    component: Layout,
    children: [{
            path: '',
            name: '导航首页',
            component: Home,
            icon: 'help-buoy'
        },
        {
            path: 'cat/:cat',
            props: true,
            name: '子类页面',
            meta: {
                hidden: true
            },
            component: Detail
        },
        {
            path: 'add',
            name: '提交链接',
            component: AddLink,
            icon: 'gear-a'
        }
    ]
}]