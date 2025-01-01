<template>
<div class="bg-black">
    <div class="bg-blue-900">
        <h2 class="text-4xl font-extrabold text-white  text-center m-5">The Miners Lantern</h2>
        <div class="flex justify-center items-center">
            <p class="max-w-5xl m-8">
                This is the details for the Miners Lantern.
            </p>
        </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 py-12 -mt-20">
    <div class="bg-blue-900/20 rounded-lg border border-blue-800 p-8 shadow-xl"> 
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                <div class="text-blue-300 mb-1">Duration</div>
                <div class="font-semiboldi text-white">6 months</div>
            </div>
            <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                <div class="text-blue-300 mb-1">Role</div>
                <div class="font-semiboldi text-white">Lead Developer</div>
            </div>
            <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                <div class="text-blue-300 mb-1">Status</div>
                <div class="font-semiboldi text-white">Completed</div>
            </div>
            <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                <div class="text-blue-300 mb-1">Type</div>
                <div class="font-semiboldi text-white">Web App</div>
            </div>
    </div>
        <h3 class="text-3xl font-extrabold dark:text-white text-center m-5">Purpose of Project</h3>
        <div class="flex justify-center items-center">
            <p class="flex-auto m-8 text-white">
                The miners lantern was created as part of a hackathon. It was part of a 16-week intensive Full Stack Developer BootCamp with <a href="https://codeinstitute.net" target="_blank">CodeInstitute</a>, organised by <a href="https://www.headforwards.com" target="_blank">Headforwards</a>.
            </p>
        </div>


        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4 font-heading text-blue-400">Technologies Used</h2>
            <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Django</span>
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Bootstrap</span>
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Javascript</span>
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a href="https://www.heroku.com/" target="_blank">Heroku</a></span>
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a href="https://cloudinary.com/" target="_blank">Cloudinary</a></span>
                <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a href="https://neon.tech/" target="_blank">Neon.tech</a></span>
            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Real-time inventory tracking</div>
                <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Automated order processing</div>
                <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Analytics dashboard</div>
                <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Payment gateway integration</div>
            </div>
        </section>


        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4 font-heading text-blue-400">Challenges &amp; Solutions</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl mb-4 text-blue-300">Challenges</h3>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                            <span>Implementing real-time inventory management</span>
                        </li>
                        <li class="flex items-start">
                            <span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                            <span>Handling concurrent user sessions</span>
                        </li>
                        <li class="flex items-start">
                            <span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                            <span>Optimizing database queries for performance</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl mb-4 text-blue-300">Solutions</h3>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                            <span>Utilized WebSocket for real-time updates</span>
                        </li><li class="flex items-start"><span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span><span>Implemented Redis caching layer</span></li><li class="flex items-start"><span class="block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span><span>Designed efficient database schemas</span></li></ul></div></div></section>


        <section><h2 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h2><div class="grid md:grid-cols-2 gap-4"><img src="" alt="Project screenshot 1" class="rounded-lg border border-blue-800 w-full"><img src="" alt="Project screenshot 2" class="rounded-lg border border-blue-800 w-full"><img src="" alt="Project screenshot 3" class="rounded-lg border border-blue-800 w-full"></div></section>


    </div>
    </div>
</div>
</template>

<script setup>
useHead({
  title: 'The Miners Lantern Hackathon Project',
  meta: [
    {
      name: 'description',
      content: 'Miners Lantern Hackathon Project part of CodeInstitute BootCamp'
    }
  ]
})
</script>

<style>
</style>

