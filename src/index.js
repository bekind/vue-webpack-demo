import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'


// import app from './app.vue'
import index from './routers/index.vue'
import recommend from './routers/recommend.vue'

// 添加VueLazyload 选项
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './load_img.png',
    loading: './load_img.png',
    attempt: 1
});

Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    // { path: '/foo', component: Foo },
    { path: '/', component: index },
    { path: '/index', component: index },
    { path: '/recommend', component: recommend },
    { path: '/find', component: recommend },
    { path: '/setting', component: recommend }
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  // 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  data: {
    current: 0,
    paths: [
      { title: '首页', cls: 'index', path: '/index' },
      { title: '推荐', cls: 'recommend', path: '/recommend' },
      { title: '发现', cls: 'find', path: '/find' },
      { title: '设置', cls: 'setting', path: '/setting' },
    ]
  },
  methods: {
  }
}).$mount('#main')
  

// new Vue({
//     el: '#main',
//     render: (createElement) => createElement(app)
// })