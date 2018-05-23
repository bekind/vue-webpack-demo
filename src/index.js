import Vue from 'vue'
import app from './app.vue'
import VueLazyload from 'vue-lazyload'

// 添加VueLazyload 选项
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './load_img.png',
    loading: './load_img.png',
    attempt: 1
  })

new Vue({
    el: '#main',
    render: (createElement) => createElement(app)
})