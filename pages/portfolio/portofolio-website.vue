<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20">
            <h1 class="text-4xl font-extrabold text-white text-center m-5">Portfolio Site</h1>
        </div>

        <div class="max-w-4xl mx-auto px-4 py-12 ">
            <div class="bg-blue-900/20 rounded-lg border border-blue-800 p-8 shadow-xl">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Duration</div>
                        <div class="font-semiboldi text-white">N/A</div>
                    </div>
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Role</div>
                        <div class="font-semiboldi text-white">Developer</div>
                    </div>
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Status</div>
                        <div class="font-semiboldi text-white">Ongoing</div>
                    </div>
                    <div class="text-center p-4 bg-blue-900/30 rounded-lg">
                        <div class="text-blue-300 mb-1">Type</div>
                        <div class="font-semiboldi text-white">Web App</div>
                    </div>
                </div>

                <img src="/public/assets/screenshots/portfolio-site-responsive-screenshots.png"
                    alt="Gainpace Property Responsive Screenshots">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        This is my portfolio website built with Nuxt3 and TailwindCSS. It is a simple website that
                        showcases my projects and provides information about me. The website is responsive and has a
                        contact form for users to get in touch with me. 
                    </p>
                    <p class="m-8 text-white">
                        The site is hosted on Netlify and uses Netlify forms to send an email to me when a user submits the
                        contact form.
                    </p>
                    <p class="m-8 text-white">
                        The code is on Github and I've used the Netlify CLI to build and deploy the site. As the site uses Netlify Forms, 
                        I have used the <code class="text-blue-300">npx nuxi generate</code> command to generate HTML files in order 
                        for Netlify to detect the form.
                    </p>
                    <p class="m-8 text-white">
                        The form submission is handled using JavaScript to post the data to Netlify, and upon successful submission, 
                        a message is displayed to the visitor to confirm that the form has been submitted successfully.
                    </p>
                    <p class="m-8 text-white">
                        When the form is submitted, the data is sent to Netlify and I have used Netlify notifications to hav an email 
                        sent to me with the form data.
                    </p>
                    <p class="m-8 text-white">
                        This is an ongoing project as I will be adding more projects to it in the future.
                    </p>
                </div>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Links</h3>
                    <div class="flex gap-4">
                        <a href="https://github.com/surfdemon/nuxt-portfolio" target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Source Code</div>
                            <div class="font-semibold text-white">View on GitHub</div>
                        </a>
                        <a href="https://rob-beach-portfolio.netlify.app/" target="_blank"
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
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Nuxt3</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Vue3</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">TailwindCSS</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Github</span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a
                                href="https://www.netlify.com/" target="_blank">Netlify</a></span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Netlify CLI</span>
                    </div>
                </section>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Responsive Design</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Contact Form</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">List Projects</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Provide Info About Me</div>

                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <img src="/public/assets/screenshots/portfolio-site-home.png" alt="Portfolio Site Home Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/portfolio-site-about.png" alt="Portfolio Site About Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/portfolio-site-contact.png" alt="Portfolio Site Contact Page"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/portfolio-site-projects.png" alt="Portfolio Site Projects Page"
                            class="rounded-lg border border-blue-800 w-full">
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Portfolio Website',
    meta: [
        {
            name: 'description',
            content: 'My portfolio website built with Nuxt3 and TailwindCSS'
        }
    ]
})
</script>

<style></style>
