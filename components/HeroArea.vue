<template>
    <div id="hero-area" class="w-screen h-screen flex flex-col items-center justify-center">
            <img src="/assets/img/rob-on-beach.png" alt="" id="hero-image" class="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-blue-500">
            <h1 class="mx-auto text-white font-bold mb-8 text-5xl" style="">Robert Beach</h1>
            <p class="mx-auto text-blue-300 text-center text-2xl mb-8 px-6">A full stack developer creating professional and functional websites.</p>
            <div class="flex justify-center space-x-4"><button class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"><nuxt-link to="portfolio">Projects</nuxt-link></button><nuxt-link to="contact" class="border-2 border-blue-500 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-900/30 transitio">Contact</nuxt-link></div>
    </div>
</template>
<style>

</style>