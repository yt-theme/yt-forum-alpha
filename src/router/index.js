import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import IndexPage from '@/components/indexPage/indexPage.vue'
import Zchat from '@/components/talkPage/zchat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index_page/1',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/index_page/:page',
          component: IndexPage,
        }
      ]
    },
    {
      path: '/zchat',
      name: 'Zchat',
      component: Zchat,
    }
  ]
})
