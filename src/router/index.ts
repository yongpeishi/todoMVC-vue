import { createMemoryHistory, createRouter } from 'vue-router'
import TodoApp from '../components/TodoApp.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: TodoApp },
    { path: '/active', component: TodoApp },
    { path: '/completed', component: TodoApp },
  ],
})

export default router
