<template>
  <div>
    <ContentList path="blog/">
      <template #default="{ list }">
        <div v-for="blogPost in list" :key="blogPost._path">
          <NuxtLink :to="blogPost._path">
            <h2>
              {{ blogPost.title }}
            </h2>
            <p>{{ blogPost.description }}</p>
          </NuxtLink>
        </div>
      </template>
      <template #not-found>
        <p>No blog posts found.</p>
      </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
