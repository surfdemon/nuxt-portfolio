<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
            <h1 class="text-5xl font-extrabold text-white text-center m-5">The Miners Lantern</h1>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12 ">
            <div class="bg-blue-900/20 rounded-lg border border-blue-800 p-8 shadow-xl">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Duration</div>
                        <div class="font-semiboldi text-white">4 Days</div>
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

                <img class="mx-auto" src="/public/assets/screenshots/miners-lantern-responsive.png" alt="">
                
                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>
                
                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        The Miners Lantern project was created as part of a hackathon. It was part of a 16-week intensive Full
                        Stack Developer BootCamp with <a href="https://codeinstitute.net"
                            target="_blank">CodeInstitute</a>, organised by <a href="https://www.headforwards.com"
                            target="_blank">Headforwards</a>. Four developers worked on the project, each
                        contributing to the project and helping each other.
                    </p>
                    <p class="m-8 text-white">The aim of the project was to create a platform, using technologies
                        covered in the bootcamp, for people to book events tickets
                        and manage their bookings. The platform should also include features for managing the event
                        details, creating and managing tickets, and managing the user's bookings.</p>
                    <p class="m-8 text-white">I started off by setting the Github repository, installed Django along
                        with all the other
                        required software and setup the hosting and database for the live site.</p>
                    <p class="m-8 text-white">After the initial setup I worked on authentication for the site and the
                        pages for booking events tickets along with updating ticket bookings.</p>
                </div>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Links</h3>
                    <div class="flex gap-4">
                        <a href="https://github.com/surfdemon/theater-booking-system" target="_blank" rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Source Code</div>
                            <div class="font-semibold text-white">View on GitHub</div>
                        </a>
                        <a href="https://miners-lantern-b436a12bd6f4.herokuapp.com" target="_blank"
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
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Django</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Bootstrap</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Javascript</span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a
                                href="https://www.heroku.com/" target="_blank">Heroku</a></span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a
                                href="https://cloudinary.com/" target="_blank">Cloudinary</a></span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a
                                href="https://neon.tech/" target="_blank">Neon.tech</a></span>
                    </div>
                </section>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Create &amp; manage events
                        </div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Register tickets for event
                        </div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Sign up for newsletter</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800">Register Account to Login
                            &amp; Logout</div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <img src="/public/assets/screenshots/miners-lantern-home-page.png" alt="Project screenshot 1" class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/miners-lantern-events.png" alt="Project screenshot 2" class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/miners-lantern-about.png" alt="Project screenshot 3" class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/miners-lantern-bookings.png" alt="Project screenshot 3" class="rounded-lg border border-blue-800 w-full">
                    </div>
                </section>

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

<style></style>
