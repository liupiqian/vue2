import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'
import Car from '@/pages/Car'
import Login from '@/pages/Login'
import My from '@/pages/My'
import Class from '@/pages/Class'
import Search from '@/pages/Search'
import Sou from '@/pages/Sou'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index', 
      component: Index
    },
    {
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    },
    {
    	path:'/car',
    	name:'Car',
    	component:Car
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
    	path:'/my',
    	name:'My',
    	component:My
    },
    {
    	path:'/class',
    	name:'Class',
    	component:Class
    },
    {
    	path:'/search/:cid',
    	name:'Search',
    	component:Search
    },
    {
    	path:'/sou/:kk',
    	name:'Sou',
    	component:Sou
    }
  ]
})
