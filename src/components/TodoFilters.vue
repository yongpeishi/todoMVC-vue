<script lang="ts" setup>
//TODO apply selected on click
</script>

<template>
  <ul class="filters">
    <li>
      <RouterLink class="selected" to="/">All</RouterLink>
    </li>
    <li>
      <RouterLink to="#/active">Active</RouterLink>
    </li>
    <li>
      <RouterLink to="#/completed">Completed</RouterLink>
    </li>
  </ul>
</template>
