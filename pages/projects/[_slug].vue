<template>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <div v-if="project">
      <h1 class="text-white text-2xl font-semibold mb-6">{{ project.title }}</h1>
      <ContentRenderer :value="project" />
      <div class="mt-8">
        <nuxt-link to="/portfolio" class="active:bg-green-700 bg-green-500 rounded text-white font-bold py-3 px-5">Back to portfolio</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from '#app'
import { queryContent } from '#imports'

const route = useRoute()
const { data: project } = await useAsyncData(`projects-${route.params.slug}`, () => queryContent('projects').where({ slug: route.params.slug }).findOne())
</script>

<style>
/* Add any additional styles here if needed */

</style>