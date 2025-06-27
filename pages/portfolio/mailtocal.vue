<template>
  <div class="bg-black">

    <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
      <h1 class="text-5xl font-extrabold text-white text-center m-5">MailToCal</h1>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12 ">
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
            <div class="font-semiboldi text-white">Completed</div>
          </div>
          <div class="text-center p-4 bg-blue-900/30 rounded-lg">
            <div class="text-blue-300 mb-1">Type</div>
            <div class="font-semiboldi text-white">Website</div>
          </div>
        </div>

        <img class="mx-auto" src="/public/assets/screenshots/freeslots4u-responsive-screenshots.png"
                             alt="MailToCal Responsive Screenshots">

        <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

        <div class=" justify-center items-center">
          <p class="m-8 text-white">
          MailtToCal.com is an on going personal project that I created. There are two reasons for creating this site. 
          One reason was to create a project that uses AI to process data in a useful way, and the other reason 
          was to try out coding with AI. 
          </p> 
          <p class="m-8 text-white">
          The idea is that users can send an email to their own unique email address with the event details, 
          and it will automatically create an event in your calendar. This is particularly useful for people who 
          receive event invitations via email and want to quickly add them to their calendar without having to 
          manually enter the details.
          </p>
          <p class="m-8 text-white">
          The project was inspired by the need for a simple and efficient way to manage calendar events, especially
          for busy individuals who receive or send numerous event invitations daily. The goal was to create a 
          user-friendly solution that would streamline the process of adding events to calendars.
          </p>
          <p class="m-8 text-white">
          Using AI, I created a system that can parse the email content and then use AI to extract the relevant 
          information such as the event title, date, time, and location. 
          </p>
          <p class="m-8 text-white">
          The site is built using Nuxt3 and Vue.js. It is hosted on Netlify and uses the Netlify functions 
          and Google Cloud Functions. The AI processing is done using Claude AI. Supabase is used for the
          database. The site is fully responsive and works on both desktop and mobile devices.
          </p>

        </div>


        <section class="mb-12">
          <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Nuxt3</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Vue.js</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Javascript</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Netlify</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Netlify Functions</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Supabase</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Google Cloud Functions</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Google Calendar API</span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a href="https://www.maxmind.com/en/home" target="_blank">MaxMind</a></span>
            <span
                class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200"><a href="https://www.aweber.com/" target="_blank">Aweber</a></span>
          </div>
        </section>

        <section class="mb-12">
          <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Key Features</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Responsive Design</div>
            <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">User Registration and Authentication</div>
            <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Geo Targeted Ads</div>
            <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">Geo Targeted Redirect/Stats System</div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Project Gallery</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <img src="/public/assets/screenshots/freeslots4u-home.png" alt="Freeslots4u Home Page"
                                                                       class="rounded-lg border border-blue-800 w-full">
            <img src="/public/assets/screenshots/freeslots4u-games.png" alt="Freeslots4u Games Page"
                                                                        class="rounded-lg border border-blue-800 w-full">
            <img src="/public/assets/screenshots/freeslots4u-bonuses.png" alt="Freeslots4u Bonuses Page"
                                                                          class="rounded-lg border border-blue-800 w-full">
            <img src="/public/assets/screenshots/freeslots4u-game.png" alt="Freeslots4u Alien Invaders Page"
                                                                       class="rounded-lg border border-blue-800 w-full">
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Freeslots4u Website',
    meta: [
        {
            name: 'description',
            content: 'Website that I worked on while at Atelm Ltd.'
        }
    ]
})
</script>

<style></style>
