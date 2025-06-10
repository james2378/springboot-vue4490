import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import tuwendongtaiqu from '@/views/modules/tuwendongtaiqu/list'
    import shipindongtaiqu from '@/views/modules/shipindongtaiqu/list'
    import huodongpiaoquan from '@/views/modules/huodongpiaoquan/list'
    import news from '@/views/modules/news/list'
    import discussshangpin from '@/views/modules/discussshangpin/list'
    import shangpin from '@/views/modules/shangpin/list'
    import jinqihuodong from '@/views/modules/jinqihuodong/list'
    import forum from '@/views/modules/forum/list'
    import shetuan from '@/views/modules/shetuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/tuwendongtaiqu',
        name: '图文动态区',
        component: tuwendongtaiqu
      }
      ,{
	path: '/shipindongtaiqu',
        name: '视频动态区',
        component: shipindongtaiqu
      }
      ,{
	path: '/huodongpiaoquan',
        name: '活动票券',
        component: huodongpiaoquan
      }
      ,{
	path: '/news',
        name: '汉服知识',
        component: news
      }
      ,{
	path: '/discussshangpin',
        name: '商品评论',
        component: discussshangpin
      }
      ,{
	path: '/shangpin',
        name: '商品',
        component: shangpin
      }
      ,{
	path: '/jinqihuodong',
        name: '近期活动',
        component: jinqihuodong
      }
      ,{
	path: '/forum',
        name: '汉服交流',
        component: forum
      }
      ,{
	path: '/shetuan',
        name: '社团',
        component: shetuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
