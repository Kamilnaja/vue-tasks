<script setup lang="ts">
import PageView from "../PageView.vue";

import { onMounted, ref } from "vue";
import type { Checklist } from "./checklist.model";

const checklists = ref<Checklist[]>([]);

onMounted(async () => {
  const response = await fetch("/api/checklists");
  const data = await response.json();
  checklists.value = data;
});
</script>
<template>
  <PageView
    title="Checklists"
    subtitle="Browse your checklists"
    description="Checklist is a reusable list of tasks."
  >
    <ul>
      <li v-for="{ title, id } in checklists" :key="id">
        {{ title }}
      </li>
    </ul>
  </PageView>
</template>
