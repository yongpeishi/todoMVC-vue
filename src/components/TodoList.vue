<script setup lang="ts">
import { defineProps } from 'vue';

const { todolist } = defineProps<{
  todolist: { id: number; text: string }[]
}>()
</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="item in todolist" :key="item.id">
        <div class="view">
          <label>{{ item.text }}</label>
        </div>
      </li>
    </ul>
  </section>
</template>
