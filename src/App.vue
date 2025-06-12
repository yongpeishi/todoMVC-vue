<script setup lang="ts">
import { ref } from 'vue'
import NewTodo from './components/NewTodo.vue'

const id = ref(0)
const todolist = ref<{ id: number; text: string }[]>([])

const appendNewTodo = (todoText: string) => {
  todolist.value.push({
    id: id.value++,
    text: todoText,
  })
}
</script>

<template>
  <NewTodo @add-todo="appendNewTodo" />

  <main></main>

  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<style scoped></style>
