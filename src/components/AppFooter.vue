<script lang="ts" setup>
import TodoCount from './TodoCount.vue';
import TodoFilters from './TodoFilters.vue';

const { count } = defineProps<{ count: number }>()

</script>

<template>
  <footer class="footer">
    <TodoCount :count />
    <TodoFilters />
  </footer>
</template>

<style scoped></style>
