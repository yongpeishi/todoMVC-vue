<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <RouterView :key="route.path" />

  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>
