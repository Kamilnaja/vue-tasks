<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <Header>
    <template #title="{ id }">
      {{ id }}
      <h1>Todo List</h1></template
    >
    <template #subtitle><h2>Manage your tasks</h2></template>
  </Header>
</template>
