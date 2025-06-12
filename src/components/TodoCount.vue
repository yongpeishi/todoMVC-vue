<script lang="ts" setup>
const { count } = defineProps<{ count: number }>()
</script>

<template>
  <span class="todo-count"><strong>{{ count }}</strong> item left</span>
</template>
