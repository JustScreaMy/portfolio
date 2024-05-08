<template>
  <div>
    <ContentList path="blog/">
      <template #default="{ list }">
        <Card v-for="blogPost in list" :key="blogPost._path">
          <NuxtLink :to="blogPost._path">
            <h2>
              {{ blogPost.title }}
            </h2>
            <p>{{ blogPost.description }}</p>
          </NuxtLink>
        </Card>
      </template>
      <template #not-found>
        <p>No blog posts found.</p>
      </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
h2 {
  margin: 0;
}
p {
  margin: 0;
}
a {
  width: 100%;
  height: 100%;
}
</style>
