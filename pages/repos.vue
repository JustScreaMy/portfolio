<template>
  <template v-if="pending"> <p>Loading...</p> </template>
  <template v-else-if="error">
    <p class="error">Failed to load, please try again later.</p>
  </template>
  <template v-else v-for="repository in data" :key="repository.id">
    <Repository v-if="!repository.fork" :repository />
  </template>
</template>

<script lang="ts" setup>
const { data, error, pending } = await useFetch(
  "https://api.github.com/users/justscreamy/repos"
);
// TODO: sort it somehow
// const sortedRepos = computed(() => {
//   if (!error.value && !pending.value) {
//     return data.value.sort(
//       (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
//     );
//   }
// });
</script>

<style>
.error {
  color: #94524a;
  text-align: center;
}
</style>
