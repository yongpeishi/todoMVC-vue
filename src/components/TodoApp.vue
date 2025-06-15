<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useLocalStorage } from '@vueuse/core'

import type { TodoList } from '../types'

import NewTodo from './NewTodo.vue'
import AppFooter from './AppFooter.vue'

const route = useRoute()
const todolist = useLocalStorage<TodoList>('todo-vuejs', [])

const id = ref(0)
const activeTodoCount = computed(() => {
  return todolist.value.filter(item => !item.completed).length
})
const completedCount = computed(() => {
  return todolist.value.filter(item => item.completed).length
})

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

</script>

<template>
  <section class="todoapp">
    <NewTodo @add-todo="appendNewTodo" />
    <div v-if="todolist.length > 0">

      <RouterView :key="route.path" :todolist="todolist" @toggle-complete="toggleCompletedState"
        @delete-item="deleteItem" @update-item="updateItem" />

      <AppFooter :count="activeTodoCount" :completedCount="completedCount" @clear-completed="clearCompleted" />
    </div>
  </section>
</template>
