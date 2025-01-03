    <script setup>

    </script>

<template>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <main class="w-full">
      <h1 class="text-white text-3xl font-semibold mb-6 text-center">Previous Projects</h1>
      <section class="space-y-4 divide-y">
        <nuxt-link to="portfolio/the-miners-lantern" class="mb-3">
        <h2 class="flex flex-row justify-center text-2xl">The Miners Lantern</h2>
        <article class="pt-4 flex flex-row">
          <div class="flex flex-col text-center justify-center">
          <img 
            src="/assets/screenshots/miners-lantern-responsive.png" 
            alt="The Miners Lantern Responsive Screenshot"
            class=""
          >
        </div>
        <div class="flex flex-col justify-center p-6 text-center">
          <p>Based on a fictional pub, the Miners Lantern website is a hackathon I worked on while doing a 16-week full stack developer bootcamp.</p>

        </div>
        </article>
        </nuxt-link>
      </section>
    </main>
  </div>
</template>


<style>
/* Add any additional styles here if needed */
</style>