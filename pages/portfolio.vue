<template>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <main class="w-full">
      <h1 class="text-white text-2xl font-semibold mb-6">My Portfolio page</h1>
      <section class="space-y-4 divide-y">
        <article v-for="project in projects" :key="project._path" class="pt-4">
          <h2 class="text-lg mb-2 text-blue-700 hover:text-blue-800">
            <nuxt-link :to="`/projects/${project.slug}`">{{ project.title }}</nuxt-link>
          </h2>
          <span>{{ project.description }}</span>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'
import { queryContent } from '#imports'

const {  data: projects } = await useAsyncData('projects', () => queryContent('projects').find())
</script>

<style>
/* Add any additional styles here if needed */
</style>