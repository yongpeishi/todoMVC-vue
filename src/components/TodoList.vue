<script setup lang="ts">
import type { TodoListProps } from '@/types';

const { todolist } = defineProps<{
  todolist: TodoListProps
}>()

const emit = defineEmits(['toggle-complete'])

const toggleComplete = (itemId: number) => {
  emit('toggle-complete', itemId)
}
</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="item in todolist" :key="item.id" :class="{ completed: item.completed }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @click="toggleComplete(item.id)" />
          <label>{{ item.text }}</label>
          <button class="destroy"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
