<template>
  <Card>
    <h2>{{ props.repository.name }}</h2>
    <p>{{ props.repository.description }}</p>
    <NuxtLink :href="props.repository.html_url">
      <NuxtImg
        width="24px"
        height="24px"
        class="icon"
        src="/img/github_icon.png"
        alt="Github Icon"
      />
    </NuxtLink>
  </Card>
</template>

<script lang="ts" setup>
import type { Repository } from "~/types/github";

const props = defineProps<{
  repository: Repository;
}>();
</script>

<style scoped>
h2 {
  margin: 0;
}
.icon {
  cursor: pointer;
}
</style>
