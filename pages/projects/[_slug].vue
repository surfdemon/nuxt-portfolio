  <script setup>
  import { useAsyncData, useRoute } from '#app'
  import { queryContent } from '#imports'
  import { routes } from 'vue-router/auto-routes';
  console.log(` the slug is ${route.params.slug}`)
  const route = useRoute()
  const projects = await useAsyncData('projects', () => queryContent('portfolio').where({ slug: route.params.slug}).findOne())
  
  // const { data: project } = await useAsyncData('projects', 
  //     () => queryContent('projects')
  //       .where({ slug: route.params.slug })
  //       .findOne()
  //   )
  console.log(` the project is ${project}`)
  console.log(project)
  // <!-- <ContentRenderer :value="project" /> -->
  
  </script>


<template>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <div v-if="project">
      <h1 class="text-white text-2xl font-semibold mb-6">{{ project.title }}</h1>
       <ContentDoc :document="project" />
      <div class="mt-8">
        <nuxt-link to="/portfolio" class="active:bg-green-700 bg-green-500 rounded text-white font-bold py-3 px-5">Back to portfolio</nuxt-link>
      </div>
    </div>
</div>
</template>
<style>
/* Add any additional styles here if needed */

</style>