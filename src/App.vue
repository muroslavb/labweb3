<script setup lang="ts">
import Users from '@/components/Users.vue'
</script>

<template>
  <main class="app">
    <h1 class="app__title">Користувачі</h1>
    <Users />
  </main>
</template>

<style>
:root {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #1b2a4a;
  background: #f3f6fb;
}
body {
  margin: 0;
}
.app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}
.app__title {
  margin: 0 0 16px;
  font-size: 1.75rem;
}
</style>
