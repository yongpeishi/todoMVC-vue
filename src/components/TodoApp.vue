<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useLocalStorage } from '@vueuse/core'

import type { TodoList } from '../types'

import NewTodo from './NewTodo.vue'
import AppFooter from './AppFooter.vue'

const todolist = useLocalStorage<TodoList>('todo-vuejs', [])
const route = useRoute()

const id = ref(0)
const todoCount = ref(0)
const completedCount = ref(0)

const appendNewTodo = (todoText: string) => {
  todolist.value.push({
    id: id.value++,
    text: todoText,
    completed: false
  })
}

//TODO: Can DRY up these functions
const toggleCompletedState = (id: number) => {
  const item = todolist.value.find(item => item.id === id)
  if (item) {
    const currentState = item.completed
    item.completed = !currentState
  }
}

const deleteItem = (id: number) => {
  const index = todolist.value.findIndex(item => item.id == id)
  if (index !== -1) {
    todolist.value.splice(index, 1)
  }
}

const updateItem = (id: number, newText: string) => {
  const item = todolist.value.find(item => item.id === id)
  if (item) {
    item.text = newText
  }
}

const clearCompleted = () => {
  todolist.value = todolist.value.filter(item => !item.completed)
}

watch(todolist, (newList) => {
  todoCount.value = newList.filter(item => !item.completed).length
  completedCount.value = todolist.value.length - todoCount.value
}, { deep: true })
</script>

<template>
  <section class="todoapp">
    <NewTodo @add-todo="appendNewTodo" />
    <div v-if="todolist.length > 0">

      <RouterView :key="route.path" :todolist="todolist" @toggle-complete="toggleCompletedState"
        @delete-item="deleteItem" @update-item="updateItem" />

      <AppFooter :count="todoCount" :completedCount="completedCount" @clear-completed="clearCompleted" />
    </div>
  </section>
</template>
