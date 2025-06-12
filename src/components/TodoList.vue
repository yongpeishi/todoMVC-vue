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
      <li v-for="item in todolist" :key="item.id">
        <div class="view">
          <label>{{ item.text }}</label>
        </div>
      </li>
    </ul>
  </section>
</template>
