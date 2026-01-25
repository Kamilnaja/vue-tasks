<script setup lang="ts">
import PageView from "../PageView.vue";

import { onMounted, ref } from "vue";

const users = ref([]);

onMounted(async () => {
  console.log("Fetching users...");
  const response = await fetch("/api/users");
  console.log("Response:", response);
  const data = await response.json();
  console.log("Data:", data);
  users.value = data;
});
</script>
<template>
  <PageView
    title="Checklists"
    subtitle="Browse your checklists"
    description="Checklist is a reusable list of tasks."
  />
</template>
