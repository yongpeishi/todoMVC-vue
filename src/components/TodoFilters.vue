<script lang="ts" setup>
//TODO apply selected on click
</script>

<template>
  <ul class="filters">
    <li>
      <RouterLink :to="{ name: 'all' }">All</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'active' }">Active</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'completed' }">Completed</RouterLink>
    </li>
  </ul>
</template>
