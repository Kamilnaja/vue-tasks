<script setup lang="ts">
import Header from "./Header.vue";
import todos from "./todos.json";
</script>

<template>
  <Header>
    <template #title="{ id }">
      {{ id }}
      <h1>Todo List</h1></template
    >
    <template #subtitle><h2>Manage your tasks</h2></template>
  </Header>
  <ul>
    <li v-for="{ id, text } in todos" :key="id">{{ text }}</li>
  </ul>
</template>
