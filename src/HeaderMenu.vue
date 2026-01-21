<script setup lang="ts"></script>
<style scoped>
.header-menu {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}
</style>

<template>
  <nav>
    <ul class="header-menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/checklists">Checklists</router-link>
      </li>
      <li>
        <router-link to="/notes">Notes</router-link>
      </li>
      <li>
        <router-link to="/stats">Stats</router-link>
      </li>
    </ul>
  </nav>
</template>
