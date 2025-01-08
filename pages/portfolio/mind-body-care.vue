<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
            <h1 class="text-5xl font-extrabold text-white text-center m-5">Mind Body Care</h1>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12 ">
            <div class="bg-blue-900/20 rounded-lg border border-blue-800 p-8 shadow-xl">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Duration</div>
                        <div class="font-semiboldi text-white">3 Days</div>
                    </div>
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Role</div>
                        <div class="font-semiboldi text-white">Developer</div>
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

                <img src="/public/assets/screenshots/mind-body-care-screenshots.png" alt="Mind Body Care Screenshots">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        Mind Body Care was a solo projcet as part of a 16-week intensive Full
                        Stack Developer BootCamp with <a href="https://codeinstitute.net"
                            target="_blank">CodeInstitute</a>, organised by <a href="https://www.headforwards.com"
                            target="_blank">Headforwards</a>. I was tasked with creating a site using just HTML and
                        Boostrap that had been covored in the course.
                    </p>
                    <p class="m-8 text-white">
                        The topic for the site is based on a fictional mindfulness group that have meetings. The aim of
                        the site was about design and presenting information in a clean layout that is responsive.
                    </p>
                </div>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Links</h3>
                    <div class="flex gap-4">
                        <a href="https://github.com/surfdemon/mind-body-care/" target="_blank" rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Source Code</div>
                            <div class="font-semibold text-white">View on GitHub</div>
                        </a>
                        <a href="https://surfdemon.github.io/mind-body-care/" target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Live Demo</div>
                            <div class="font-semibold text-white">View Project</div>
                        </a>
                    </div>
                </section>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Bootstrap</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Github Pages</span>
                    </div>
                </section>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Responsive Design</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Contact Form in Modal</div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <img src="/public/assets/screenshots/mind-body-care-home-page.png" alt="Mind Body Care Home Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/mind-body-care-benefits.png" alt="Mind Body Care Benefits Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/mind-body-care-meetups.png" alt="Mind Body Care MeetUp Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/mind-body-care-feedback.png" alt="Mind Body Care Feedback Page"
                            class="rounded-lg border border-blue-800 w-full">
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Mind Body Care Project',
    meta: [
        {
            name: 'description',
            content: 'Mind Body Care Bootstrap Project'
        }
    ]
})
</script>

<style></style>
