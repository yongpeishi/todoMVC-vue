<script setup lang="ts">
import { ref } from 'vue'

const newTodoText = ref('')
const emit = defineEmits(['add-todo'])

const addTodo = () => {
  const enteredText = newTodoText.value.trim()

  if (enteredText) {
    emit('add-todo', enteredText)
    newTodoText.value = ''
  }
}
</script>

<template>
  <header class="new-todo">
    <input
      type="text"
      placeholder="What needs to be done?"
      v-model="newTodoText"
      @keyup.enter="addTodo"
      autofocus
      class="new-todo"
    />
  </header>
</template>
