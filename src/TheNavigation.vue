<script setup lang="ts"></script>
<style scoped>
.header-menu {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}

.active-link {
  font-weight: bold;
  text-decoration: underline;
}
</style>

<template>
  <nav>
    <ul class="header-menu">
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'checklists' }">Checklists</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'notes' }">Notes</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'stats' }">Stats</router-link>
      </li>
    </ul>
  </nav>
</template>
