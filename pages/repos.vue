<script lang="ts" setup>
import type {Repository} from "~/types/github";

const {data, error, pending} = await useLazyFetch<Array<Repository>>(
    "https://api.github.com/users/justscreamy/repos"
);
</script>

<template>
  <div>
    <template v-if="pending"><p>Loading...</p></template>
    <template v-else-if="error">
      <p class="error">Failed to load, please try again later.</p>
    </template>
    <template v-else v-for="repository in data" :key="repository.id">
      <Repository v-if="!repository.fork" :repository/>
    </template>
  </div>
</template>

<style>
.error {
  color: #94524a;
  text-align: center;
}
</style>
