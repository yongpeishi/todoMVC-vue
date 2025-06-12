<script setup lang="ts">
import { ref } from 'vue'
import NewTodo from './components/NewTodo.vue'
import TodoList from './components/TodoList.vue'

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
  <section class="todoapp">
    <NewTodo @add-todo="appendNewTodo" />
    <TodoList :todolist="todolist" />
  </section>

  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<style scoped></style>
