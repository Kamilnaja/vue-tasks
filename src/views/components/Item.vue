<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
  content: { type: String, required: false },
});
</script>
<style scoped>
.item {
  height: 40px;
  border-bottom: 1px solid #eee;
}
</style>
<template>
  <div class="item">
    <h3>{{ title }}</h3>
    <p v-if="content">{{ content }}</p>
  </div>
</template>
