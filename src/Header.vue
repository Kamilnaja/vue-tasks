<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
defineProps({
  title: { type: String, required: false },
});
</script>
<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
</style>
<template>
  <section class="app-header">
    <h1>{{ title }}</h1>
    <HeaderMenu />
  </section>
  <router-view />
</template>
