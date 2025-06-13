<script setup lang="ts">
import type { TodoListProps } from '@/types';

const { todolist } = defineProps<{
  todolist: TodoListProps
}>()

const emit = defineEmits(['toggle-complete', 'delete-item'])

const toggleComplete = (itemId: number) => {
  emit('toggle-complete', itemId)
}

const deleteItem = (itemId: number) => {
  emit('delete-item', itemId)
}
</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="item in todolist" :key="item.id" :class="{ completed: item.completed }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @click="toggleComplete(item.id)" />
          <label>{{ item.text }}</label>
          <button class="destroy" @click="deleteItem(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
