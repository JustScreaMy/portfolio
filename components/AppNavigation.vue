<template>
  <div class="navbar">
    <NuxtLink to="/" class="link">About</NuxtLink>
    <NuxtLink to="/repos" class="link">Projects</NuxtLink>
    <NuxtLink to="/contact" class="link">Contact</NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #080808;
  z-index: 10;
}
.link {
  color: inherit;
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-color 0.5s ease;
}
.link:hover {
  border-color: #d1cece;
}
</style>
