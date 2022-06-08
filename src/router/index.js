import Vue from 'vue'
import Router from 'vue-router'
import Diary from '@/views/Diary'
import Todo from '@/views/Todo'
import Memo from '@/views/Memo'

// import Category from '../views/MemoCategory.Vue'
// import Notes from '../views/MemoNote.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/memo',
      name: 'Memo',
      component: Memo
    }
    // {
    //   path: '/',
    //   component: Category,
    //   children: [
    //     {
    //       meta: {
    //         showModal: true
    //       },
    //       path: ':categoryId', //the url path is in fact /:cayegoryId (:categoryId == parameter)
    //       component: Notes,
    //       props: true //when props is set to true, the route.params will be set as the component props
    //     }
    //   ]
    // },
  ]
})
