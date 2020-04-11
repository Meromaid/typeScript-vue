import Vue from 'vue';
import VueRouter, { Route } from 'vue-router'
import Home from '../pages/Home.vue'
import Goods from '../pages/Goods.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
// import Reg from '../pages/Reg.vue'
// import Detail from '../pages/Detail.vue'
import NoPage from '../pages/NoPage.vue'
Vue.use (VueRouter)
let routes = [
    {path:'/Home',component:Home},
    {path:'/Goods',component:Goods},
    {
        path:'/User',
        component:User,
        beforeEnter:(to:Route,from:Route,next:Function) => {
            console.log('独享的前置守卫')
        }
    },
    {path:'/Login',component:Login},
    {path:'/Reg',component:() => import('../pages/Reg.vue')},
    {path:'/Detail',component:(r:any) => require(['../pages/Detail.vue'],r)},
    {path:'*',component:NoPage},
    {path:'/',redirect:'/home'}
]
let router = new VueRouter({
    mode:'history',
    routes
})
router.beforeEach((to,from,next)=>{
    console.log('全局前置守卫')
    next()
})
router.afterEach((to,from)=>{
    console.log('全局后置守卫')
})
export default router