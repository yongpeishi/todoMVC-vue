import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import TodoApp from './components/TodoApp.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: TodoApp },
    { path: '/active', component: TodoApp },
    { path: '/completed', component: TodoApp },
  ],
})

createApp(App).use(router).mount('#app')
