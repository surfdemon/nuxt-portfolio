    <script setup>

    </script>

<template>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <main class="w-full">
      <h1 class="text-white text-2xl font-semibold mb-6">My Portfolio page</h1>
      <section class="space-y-4 divide-y">
        <article class="pt-4 flex">
          <div class="flex flex-col text-center justify-center">
          <nuxt-link to="portfolio/the-miners-lantern">The Miners Lantern</nuxt-link>
          <img 
            src="/assets/screenshots/miners-latern-responsive.png" 
            alt="The Miners Lantern Responsive Screenshot"
            class=""
          >
        </div>
        <div class="flex flex-col justify-center p-6 text-center">
          <p>Based on a fictional pub, the Miners Lantern website is a hackathon I worked on while doing a 16-week full stack developer bootcamp.</p>

        </div>
        </article>
      </section>
    </main>
  </div>
</template>


<style>
/* Add any additional styles here if needed */
</style>