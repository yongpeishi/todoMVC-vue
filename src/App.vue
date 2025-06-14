<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TodoListProps } from './types'
import NewTodo from './components/NewTodo.vue'
import TodoList from './components/TodoList.vue'
import AppFooter from './components/AppFooter.vue'

const id = ref(0)
//TODO: should this be reactive instead of ref?
const todolist = ref<TodoListProps>([])
const todoCount = ref(0)

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

watch(todolist, (newList) => {
  todoCount.value = newList.filter(item => !item.completed).length
}, { deep: true })

</script>

<template>
  <section class="todoapp">
    <NewTodo @add-todo="appendNewTodo" />
    <div v-if="todoCount > 0">
      <TodoList :todolist="todolist" @toggle-complete="toggleCompletedState" @delete-item="deleteItem"
        @update-item="updateItem" />
      <AppFooter :count="todoCount" />
    </div>
  </section>

  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<style scoped></style>
