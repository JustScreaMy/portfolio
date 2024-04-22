<template>
  <div>Test</div>
  <div>{{ firstName }}</div>
  <div>{{ lastName }}</div>
  <div>{{ email }}</div>
  <div>{{ subject }}</div>
  <div>{{ content }}</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  content: string;
}>();
</script>

<style></style>
