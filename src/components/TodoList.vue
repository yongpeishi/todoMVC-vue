<script setup lang="ts">
import { defineProps } from 'vue';

const { todolist } = defineProps<{
  todolist: { id: number; text: string }[]
}>()
</script>

<template>
  <ul class="todo-list">
    <li v-for="item in todolist" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>
