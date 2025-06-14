import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import TodoApp from './components/TodoApp.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: TodoApp },
    // { path: '/active', component: ActiveTodos },
    // { path: '/completed', component: CompletedTodos },
  ],
})

createApp(App).use(router).mount('#app')
