<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/stats">Stats</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>
