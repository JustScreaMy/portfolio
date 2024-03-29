<template>
  <div class="card">
    <h2>{{ props.repository.name }}</h2>
    <p>{{ props.repository.description }}</p>
    <NuxtLink :href="props.repository.html_url">
      <NuxtImg class="icon" src="/img/github_icon.png" alt="Github Icon" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["repository"]);
</script>

<style>
.card {
  background-color: #111111;
  margin: 15px 0;
  padding: 15px;
  font-size: clamp(0.5rem, 3vw, 1rem);
  border-radius: 10px;
  border-left: 10px #d1cece solid;
  text-align: left;
}
.icon {
  cursor: pointer;
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
</style>
