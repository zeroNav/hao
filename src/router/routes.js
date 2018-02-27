 /* 
  * @Author: nooldey 
  * @Author-Email: <nooldey@gmail.com> 
  * @Date: 2018-01-23 16:39:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-02-27 10:27:10
  * @Description: 路由列表
  */

 import Layout from '../view/layout/index.vue'
 import Home from '../view/home/index.vue'
 import Detail from '../view/detail/index.vue'
 import AddLink from '../view/add/index.vue'

 export default [{
     path: '',
     component: Layout,
     children: [{
             path: '',
             name: '导航首页',
             component: Home
         },
         {
             path: 'cat/:cat',
             props: true,
             name: '子类页面',
             component: Detail
         },
         {
             path: 'usr',
             name: '登录用户',
             children: [
                {
                    path: 'add',
                    name: '提交链接',
                    component: AddLink
                }
             ]
         },
         
     ]
 }]