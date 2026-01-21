<script setup lang="ts">
import { ref } from "vue";
const rawHTML = ref("<strong>This is bold text</strong>");
const id = ref("hello");
const isDisabled = ref(true);
const seen = ref(true);
const person = {
  name: "Alice",
  age: 30,
  race: "Human",
};
const toggleVisible = () => {
  seen.value = !seen.value;
};
const onSubmit = (data: any) => {
  console.log("form submitted", data);
};
</script>
<template>
  <p>Using text interpolation {{ rawHTML }}</p>
  <p>Using v-html directive <span v-html="rawHTML"></span></p>
  <div v-bind:id="'hello'">This is div with ID</div>
  <div :id>New syntax</div>
  <button :disabled="isDisabled">This button is disabled</button>
  <div v-bind="person">
    {{ person.name }}, {{ person.age }}, {{ person.race }}
  </div>
  <button @click="toggleVisible">Toggle Visible</button>
  <h2 v-if="seen">Now you can see me</h2>

  <form @submit.prevent="onSubmit">
    <input type="text" name="username" />
    <button type="submit">Submit</button>
  </form>
</template>
