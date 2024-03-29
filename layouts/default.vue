<template>
  <AppNavigation />
  <AppContent>
    <slot />
  </AppContent>
</template>

<script lang="ts" setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap");

html,
body {
  color: #d1cece;
  background-color: #080808;
  padding: 0;
  margin: 0;
  font-family: "Source Code Pro", monospace;
}

* {
  box-sizing: border-box;
}
</style>
