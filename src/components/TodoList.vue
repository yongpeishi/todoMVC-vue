<script setup lang="ts">
import type { TodoListProps } from '@/types';
import { defineProps } from 'vue';

const { todolist } = defineProps<{
  todolist: TodoListProps
}>()
</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="item in todolist" :key="item.id" :class="{ completed: item.completed }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" />
          <label>{{ item.text }}</label>
          <button class="destroy"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
