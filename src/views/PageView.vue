<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  description: { type: String, required: false },
});
</script>
<template>
  <h1>{{ title }}</h1>
  <h2 v-if="subtitle">{{ subtitle }}</h2>
  <p v-if="description">{{ description }}</p>
  <slot />
</template>
