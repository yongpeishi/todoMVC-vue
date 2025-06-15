import { createMemoryHistory, createRouter } from 'vue-router'
import TodoApp from '../components/TodoApp.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  {
    path: '/',
    component: TodoApp,
    children: [
      { path: '', name: 'all', component: TodoList, props: { filter: 'all' } },
      {
        path: 'active',
        name: 'active',
        component: TodoList,
        props: { filter: 'active' },
      },
      {
        path: 'completed',
        name: 'completed',
        component: TodoList,
        props: { filter: 'completed' },
      },
    ],
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkExactActiveClass: 'selected',
})

export default router
