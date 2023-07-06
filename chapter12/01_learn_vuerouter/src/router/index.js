import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Home from "../pages/Home.vue";  // 导入Home组件，也叫路由组件
// import About from "../pages/About.vue";
// 1.配置路由映射表（路径 映射 组件）
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向到Home组件
  },
  {
    path: '/home',
    name: 'home',
    // component: Home // Home组件，也叫Home页面
    component: ()=> import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'), // 配置路由懒加载Home组件
    children: [
      {
        path: '',
        redirect: '/home/message' // 重定向到HomeMessage组件
      },
      {
        path: "message", // 注意这里的语法：不是/message或/home/message
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "shops",
        component: () => import("../pages/HomeShops.vue")
      }
    ]
  },
  {
    path: '/about',
    // component: About
    component: ()=> import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue'),
    name: 'about',
    meta: {
      name: 'why',
      age: 18
    }
  },
  // {
  //   // 动态字段以冒号开始，例如，:username 代表是动态的。
  //   path: "/user/:username", // User页面，动态路由匹配。
  //   component: () => import("../pages/User.vue") 
  // }
  { 
    // 动态字段以冒号开始，例如，:username 和 :id 它们代表是动态的。
    path: "/user/:username/id/:id", // User页面，动态路由匹配。
    component: () => import("../pages/User.vue") 
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue")
  },
  { 
    path: "/:pathMatch(.*)", // 匹配哪些没在路由映射表中配置过的path
    component: () => import("../pages/NotFound.vue") 
  }
]
// 2.导出创建好的路由对象
const router = createRouter({
  routes,
  // history: createWebHashHistory() // 使用hash路由
  history: createWebHistory() // 使用history路由
})

// 3.商品分类页面的路由配置
const categoryRoute = {
  path: "/category",
  component: ()=> import('../pages/Category.vue')
}
// 4.动态添加顶级路由对象
router.addRoute(categoryRoute)

// 5.添加二级路由对象
router.addRoute("home", {
  path: "comment",
  component: () => import("../pages/HomeComment.vue")
})
// 6.添加路由守卫
router.beforeEach((to, from) => {
  if (to.path !== '/login') { // 如果不是登录页面
    const token = window.sessionStorage.getItem('token')
    if (!token) { // 如果没有token(没登录，那么导航到/login页面)
      return {
        path: '/login'
      }
    }
  }
})
export default router