<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
            <h1 class="text-5xl font-extrabold text-white text-center m-5">Rock Paper Scissors Lizard Spock</h1>
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

                <img src="/public/assets/screenshots/rpsls-responsive.png" alt="">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        For this hackathon, as part of a team of 4, I was nominated to be the lead developer.
                        Our task was to create a game using Bootstrap and Javascript.
                        We picked to create a game and Rock Paper Scissors Lizard Spock which was made popular by the
                        big bang theory.
                    </p>
                    <p class="m-8 text-white">
                        Along with sound effects, we decided to add score history and the ability to add a username to
                        be logged on the score board.
                        As the game was created using Javascript in the browser, the scores are stored in local storage
                        to mimic the game having a backend.
                    </p>
                    <p class="m-8 text-white">
                        The game area consists of an svg that has multiple clickable areas. This allows for clickable
                        interactivity and for responsiveness so that the game works on mobile devices and desktops.
                    </p>
                </div>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Links</h3>
                    <div class="flex gap-4">
                        <a href="https://github.com/surfdemon/CI-RPSLS" target="_blank" rel="noopener noreferrer"
                            class="flex-1 p-4 bg-blue-900/30 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition text-center">
                            <div class="text-blue-300 mb-2">Source Code</div>
                            <div class="font-semibold text-white">View on GitHub</div>
                        </a>
                        <a href="https://surfdemon.github.io/CI-RPSLS/" target="_blank" rel="noopener noreferrer"
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
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Javascript</span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Clickable SVG Map</span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Local Storage</span>
                        <span class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Github Pages</span>
                    </div>
                </section>

                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Scoring</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Score History</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Sound Effects</div>
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Responsive Layout</div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <img src="/public/assets/screenshots/rpsls-game-page.png" alt="Project screenshot 1"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/rpsls-rules.png" alt="Project screenshot 2"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/rpsls-game-history.png" alt="Project screenshot 3"
                            class="rounded-lg border border-blue-800 w-full">
                        <img src="/public/assets/screenshots/rpsls-credits.png" alt="Project screenshot 3"
                            class="rounded-lg border border-blue-800 w-full">
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Rock Paper Scissors Lizard Spock Project',
    meta: [
        {
            name: 'description',
            content: 'Rock Paper Scissors Lizard Spock Hackathon Project part of CodeInstitute BootCamp'
        }
    ]
})
</script>

<style></style>
