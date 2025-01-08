<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
            <h1 class="text-5xl font-extrabold text-white text-center m-5">Gainpace Property</h1>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12 ">
            <div class="bg-blue-900/20 rounded-lg border border-blue-800 p-8 shadow-xl">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Duration</div>
                        <div class="font-semiboldi text-white">14 Days</div>
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

                <img src="/public/assets/screenshots/gainpace-property-responsive.png"
                    alt="Gainpace Property Responsive Screenshots">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        The Gainpace Property site was created as my capstone project as part of a 16-week intensive
                        Full Stack Developer BootCamp with <a href="https://codeinstitute.net"
                            target="_blank">CodeInstitute</a>, organised by <a href="https://www.headforwards.com"
                            target="_blank">Headforwards</a>.
                    </p>
                    <p class="m-8 text-white">
                        The core criteria for the project was that the site had to be built with Django, have at least one
                        custom model and have CRUD functionality on the front end.
                    </p>
                    <p class="m-8 text-white">
                        The site allows members to advertise their properties that they have available for
                        rent. It then allows visitors to request a viewing by using a link to a Google form.
                    </p>
                </div>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Links</h3>
                    <div class="flex gap-4">
                        <a href="https://github.com/surfdemon/gainpace-property/" target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Source Code</div>
                            <div class="font-semibold text-white">View on GitHub</div>
                        </a>
                        <a href="https://gainpace-property-aa2d5954f843.herokuapp.com/" target="_blank"
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
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Responsive Design</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">User Registration and Authentication</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Add &amp; Manage Property Listings</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Filter Properties by Status</div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <img src="/public/assets/screenshots/gainpace-property-home.png" alt="Gainpace Property Home Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/gainpace-property-register.png" alt="Gainpace Property Register Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/gainpace-property-listing.png" alt="Gainpace Property Listing Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/gainpace-property-edit-listing.png" alt="Gainpace Property Edit Listing Page"
                            class="rounded-lg border border-blue-800 w-full">
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Gainpace Property Capstone Project',
    meta: [
        {
            name: 'description',
            content: 'Gainpace Property Capstone Project part of CodeInstitute BootCamp'
        }
    ]
})
</script>

<style></style>
