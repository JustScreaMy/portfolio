<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card {
  background-color: #111111;
  padding: 15px;
  margin: 15px 0;
  font-size: clamp(0.5rem, 3vw, 1rem);
  border-radius: 10px;
  border-left: 10px #d1cece solid;
  text-align: left;
}
</style>
