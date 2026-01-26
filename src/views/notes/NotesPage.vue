<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageView from "../PageView.vue";
import type { Note } from "./note.model";

const notes = ref<Note[]>([]);

onMounted(async () => {
  const response = await fetch("/api/notes");
  const data = await response.json();
  notes.value = data;
});
</script>
<template>
  <PageView
    title="Notes"
    subtitle="Browse your notes"
    description="Notes are a place to store your thoughts."
  >
    <ul>
      <li v-for="{ title, content, id } in notes" :key="id">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
      </li>
    </ul>
  </PageView>
</template>
