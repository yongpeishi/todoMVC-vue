<script lang="ts" setup>
import TodoCount from './TodoCount.vue';
import TodoFilters from './TodoFilters.vue';
import ClearCompleted from './ClearCompleted.vue';

const { count, completedCount } = defineProps<{ count: number, completedCount: number }>()
</script>

<template>
  <footer class="footer">
    <TodoCount :count />
    <TodoFilters />
    <ClearCompleted v-show="completedCount > 0" />
  </footer>
</template>

<style scoped></style>
