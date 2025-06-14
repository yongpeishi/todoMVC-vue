<script lang="ts" setup>
import TodoCount from './TodoCount.vue';
import TodoFilters from './TodoFilters.vue';

const { count, completedCount } = defineProps<{ count: number, completedCount: number }>()

const emit = defineEmits(['clear-completed'])

const clearCompleted = () => {
  emit('clear-completed')
}
</script>

<template>
  <footer class="footer">
    <TodoCount :count />
    <TodoFilters />

    <button v-show="completedCount > 0" class="clear-completed" @click="clearCompleted">
      Clear completed
    </button>
  </footer>
</template>

<style scoped></style>
