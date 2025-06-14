import { createMemoryHistory, createRouter } from 'vue-router'
import TodoApp from '../components/TodoApp.vue'
import ActiveTodo from '../components/ActiveTodos.vue'

const routes = [
  { path: '/', component: TodoApp },
  { path: '/active', component: ActiveTodo },
  // { path: '/completed', component: TodoApp },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkActiveClass: 'selected',
})

export default router
