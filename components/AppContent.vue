<template>
  <div class="content">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content {
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin: auto;
  height: fit-content;
  text-align: lefts;
  width: 80%;
}
</style>
