<template>
    <div class="bg-black">

        <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
            <h1 class="text-5xl font-extrabold text-white text-center m-5">Freeslots4u</h1>
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
                        <div class="font-semiboldi text-white">Web App</div>
                    </div>
                </div>

                <img class="mx-auto" src="/public/assets/screenshots/freeslots4u-responsive-screenshots.png"
                    alt="Freeslots4u Responsive Screenshots">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        Freeslots4u.com is one of the websites that I worked on while working at Atelm Ltd. It was one of their main sites 
                        andn sadly just about the only one that is still live. 
                        The site is a free slots site that offers free to play slots games. All the games have monthly leaderboards and 
                        the site features a tournament system that allows competitions to be run on the site. The site also has a
                        newsletter that is sent out to subscribers letting them know of the latest compotinions on the site and at the partner casinos. 
                    </p>
                    <p class="m-8 text-white">
                        The site has been around for a long time and has gone through various itterations of design. All of its games were originally 
                        Flash games. When Flash was depreciated, I co-ordinated with our graphics designer to recreate images for HTML5 versions 
                        of the games and then hired freelance developers to convert all the games to HTML5 and create new HTML5 games. 
                        I was responsible for testing the games and getting the games to load on the website. I also made it so that games would 
                        only show to visitors from certain countries if the sponsoring casino didn't accept players from that country.
                    </p>
                    <p class="m-8 text-white">
                        The site is monetized through advertising and affiliate links and casinos sponsored for games to be made with their branding on.
                    </p>
                    <p class="m-8 text-white">
                        I was responsible for everything from setting up the dedicated server to having content written for the site. 
                        Over the years, I have moved the site to different servers and have made changes to the site as needed. 
                        This included things such as, moving it from a shared hosting account to a self managed virtual servers and then to a self 
                        managed dedicated server and also upgrading the server software as needed.
                    </p>
                    <h3>Apache &amp; Nginx</h3>
                    <p class="m-8 text-white">
                        The site runs on both Apache and Nginx due to the games tournament system requiring an old version of PHP and 
                        the rest of the site requiring a newer version of PHP as it uses Maxmind. I implemented Maxmind because we 
                        required the ability to geo target parts of the site to ensure that the site stayed compliant. Maxmind moved with the times 
                        and started using newer versions of PHP which meant that we had to run the site on a newer version of PHP. But my 
                        directors never gave me the go ahead to update the tournament system to work with the newer version of PHP.
                        The tournament system and the games themselves are the only parts that I didn't create, although I supported both of 
                        them and ended up fixing them when needed. 
                    </p>

                    <h3>CSS &amp; Javascript</h3>

                    <h3>Maxmind</h3>

                    <h3>Aweber</h3>
                    <p class="m-8 text-white">
                        The pages use server side includes (SSI) to include sectionsn based on geo location of the visitors. This allowed 
                        for the pages to still be HTML pages, which was a requirement for the site.
                    </p>

                    <h3>Google PageSpeed Insights</h3>
                    <p class="m-8 text-white">
                        The site scores 90 and abave on Google PageSpeed Insights for every metric with most of them scoring 100 and is 
                        fully responsive.

                    </p>
                    <p class="m-8 text-white">
                        
                    </p>
                    <p class="m-8 text-white">
                        
                    </p>
                    <p class="m-8 text-white">
                        
                    </p>
                    <p class="m-8 text-white">
                        
                    </p>

                </div>


                <section class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 font-heading text-blue-400">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">HTML</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">CSS</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Javascript</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Apache</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">Nginx</span>
                        <span
                            class="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-700 text-blue-200">MySQL</span>
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
                        <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-800 text-white">In page HTML5 games</div>
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
