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
                        <div class="font-semiboldi text-white">Website</div>
                    </div>
                </div>

                <img class="mx-auto" src="/public/assets/screenshots/freeslots4u-responsive-screenshots.png"
                    alt="Freeslots4u Responsive Screenshots">

                <h2 class="text-3xl font-extrabold text-blue-400 text-center m-5">Project Overview</h2>

                <div class=" justify-center items-center">
                    <p class="m-8 text-white">
                        Freeslots4u.com is one of the websites I worked on at Atelm Ltd. It was one of their main sites, 
                        but sadly, it is just about the only one still online. The site is a free slots site that offers 
                        free-to-play slots games. All the games have monthly leaderboards and the site features a 
                        tournament system that allows competitions to be run on the site. The site also had a newsletter 
                        that was sent out to subscribers, letting them know of the latest competitions on the site and at 
                        the partner casinos.
                    </p>
                    <p class="m-8 text-white">
                        My job title at Atelm Ltd was technical operations manager. In addition to the day-to-day running 
                        of the company and handling all third parties, I was responsible for all technical aspects of the 
                        websites. This included everything from getting content created to managing hosting, building the 
                        sites, and testing the sites.
                    </p>
                    <p class="m-8 text-white">
                        The website had to be fully responsive and operational on desktop and mobile devices, including the games.
                    </p>
                    <p class="m-8 text-white">
                        The site makes money through advertising affiliate links and casinos sponsorship for games with their branding.
                    </p>
                    <p class="m-8 text-white">
                        The pages use many server-side includes (SSI) to include PHP files for sections based on visitors' 
                        geolocation. This allowed the pages to be still HTML pages, which was a requirement for the site.
                    </p>
                    <p class="m-8 text-white">
                        The tech stack used to build this website was HTML, CSS, Javascript, PHP, and MySQL.
                    </p>
                    <h3 class="text-blue-400 text-xl">Server</h3>
                    <p class="m-8 text-white">
                        Many of the websites ran on shared hosting accounts across many different hosting 
                        providers. I was responsible for setting up, managing, and fixing problems with all 
                        the shared hosting accounts.
                    </p>
                    <p class="m-8 text-white">   
                        Freeslots4u.com started on a shared hosting account, but as the site grew, it was 
                        moved to a virtual server and then a dedicated server. I was responsible for moving 
                        the site and setting up and managing the new servers. This included setting up SSH, 
                        FTP, PHP, MySQL, Apache, Nginx, cron jobs, SSL certificates, and everything else 
                        that was needed to run the site.
                    </p>
                    <p class="m-8 text-whit">
                        To make it easier to manage the servers, I created scripts for as many tasks as 
                        possible. For example, I set up cron jobs to backup the databases and files to 
                        the server's second hard drive. I also set up cron jobs on my machine to backup 
                        the database and files from the servers to my machine.
                    </p>
                    <h3 class="text-blue-400 text-xl">Apache &amp; Nginx</h3>
                    <p class="m-8 text-white">
                        The site runs on both Apache and Nginx because part of it requires an older 
                        version of PHP and the rest requires a newer version of PHP. Apache and Nginx 
                        both run on different ports and depending on the URL of the request, it is sent 
                        to the correct server to respond.
                    </p>
                    <h3 class="text-blue-400 text-xl">CSS &amp; Javascript</h3>
                    <p class="m-8 text-white">
                        The site has been around for a long time and has undergone various design iterations. 
                    </p>
                    <p class="m-8 text-white">
                        The website was originally created with Dreamweaver before I started working on 
                        it. As such, it was a rats' nest of tables. On the first redesign  I was tasked 
                        with, I moved it to Bootstrap and JQuery. 
                    </p>
                    <p class="m-8 text-white">      
                        As the site grew and the number of games increased, we had to change again to 
                        pure CSS and Javascript, this time not using any Javascript frameworks or CSS 
                        libraries.
                    </p>
                    <p class="m-8 text-white">
                        This was because the site was getting slower and slower and we needed to speed 
                        it up. Google was doing updates relating to speed on both desktop and mobile 
                        and I was tasked with getting the site to pass all of the Google lighthouse 
                        tests. The tests highlighted Bootstrap and JQuery as being a problem for lots 
                        of unused code being sent to the browser.
                    </p>
                    <h3 class="text-blue-400 text-xl">Google PageSpeed Insights</h3>
                    <p class="m-8 text-white">
                        The site scores mid-90s and above on Google PageSpeed Insights for every metric, 
                        with most scoring 100 for both mobile and desktop.
                    </p>
                    <img class="mx-auto mb-10" src="/public/assets/screenshots/freeslots4u-lighthouse-mobile.png"
                    alt="Freeslots4u Lighthouse Mobile Report"> 
                    <img class="mx-auto" src="/public/assets/screenshots/freeslots4u-lighthouse-desktop.png"
                    alt="Freeslots4u Lighthouse Desktop Report">
                    <p class="m-8 text-white">
                        These reports have been run about 6 years after the speed improvement work was done. When the work was 
                        done all the tests scored 100 and fireworks went off on the lighthouse report page.
                    </p>
                    <h3 class="text-blue-400 text-xl">Maxmind</h3>
                    <p class="m-8 text-white">
                        I implemented Maxmind because I was tasked with implementing the ability to geo target parts of the site 
                        to ensure that the site stayed compliant.
                    </p>
                    <p class="m-8 text-white">
                        The objective was that adverts on the site should only be shown to countries that were eligible for the offers. 
                        Also, if a player lands on a page with a link to a casino that they couldn't play at for licensing reasons, 
                        the link should take them to a list of casinos that they can play at.
                    </p>
                    <p class="m-8 text-white">
                        For freeslots4u.com and our other high traffic sites, I achieved the objectives by using Maxminds GeoIP2 PHP 
                        API to get the visitors location. For other sites that had less traffic I used Maxminds GeoIP web API via PHP 
                        scripts to get the visitors location. This meant they didn't require updating with new versions of the Maxmind 
                        database.
                    </p>
                    <p class="m-8 text-white">  
                        I ended up making a script that would update the Maxmind database files on the servers every month. I made 
                        these scripts using Node.js and also made a Python version.
                    </p>
                    <p class="m-8 text-white">
                        Maxmind became an important part of the websites and is the reason why freeslots4u.com runs both Apache & Nginx. 
                        Maxmind moved with the times upgraded to newer versions of PHP, which meant I had to update the integration 
                        scripts and we had to run the site on a newer version of PHP. A large section of the site would not work 
                        on the new versions of PHP without a rewrite. Unfortunately, the directors never gave me the go-ahead to do the 
                        rewrite of that section.
                    </p>                              
                    <h3 class="text-blue-400 text-xl">Stats System</h3>
                    <p class="m-8 text-white">
                        After implementing the Geo targeting and the Geo-targeted redirects, we still relied on stats from the casino's 
                        affiliate systems to tell us how many visitors were being sent to them and from which countries. After seeing 
                        some numbers that didn't add up, I was tasked with creating a stats system that would keep a count of visitors 
                        to each casino for each country. This allowed us to see how well the site was performing, and the system also 
                        showed us how many visitors had been blocked from going to the casino and which countries they were from. This 
                        allowed us to identify if there were any ads, links or pages that were sending visitors to casinos that they 
                        couldn't play at.
                    </p>
                    <p class="m-8 text-white">
                        This stats system helped improve the conversion rates of the website and it was rolled out to all the high traffic 
                        websites.
                    </p>
                    <p class="m-8 text-white">
                        I built the stats system using PHP and MySQL with <a href="https://www.codeigniter.com/" target="_blank">Codeigniter</a>.
                        Freeslots4u.com is the central site that runs the reports. 
                    </p>
                    <p class="m-8 text-white">
                        There is a button in the admin area collects data form all the other sites and it also collects data automatically. 
                        It uses cron jobs to call urls on the other sites which then uses XML-RPC to transfer data back to the freeslots4u 
                        stats system.
                    </p>
                    <h3 class="text-blue-400 text-xl">Aweber</h3>
                    <p class="m-8 text-white">
                        We used Aweber for the newsletter system, I implemented it on the the sites and supported it.
                    </p>
                    <h3 class="text-blue-400 text-xl">Games</h3>
                    <p class="m-8 text-white">
                        All of its games were originally Flash games. When Flash was depreciated, I coordinated with our graphics designer 
                        to recreate images for HTML5 versions of the games and then hired freelance developers to convert all the games 
                        to HTML5 and create new HTML5 games. I also made it so that games would only be shown to visitors from certain 
                        countries if the sponsoring casino didn't accept players from that country.
                    </p>
                    <p class="m-8 text-white">
                        The tournament system and the games themselves are the only parts that I didn't create, although I supported both of 
                        them and ended up fixing them when needed. 
                    </p>
                    <h3 class="text-blue-400 text-xl">Mobile and Chrome Apps</h3>
                    <p class="m-8 text-white">
                        I created an Angular app that was turned into a Chrome web app and had mobile apps created for Android and iOS. 
                        The apps used PHP files on freeslots4u that would send them geo-targeted data. The apps were created to show different 
                        content based on the user's location. This ensured compliance with various regulations and provided a tailored 
                        experience for users from different regions. The geo-targeted data included information such as available games, 
                        promotions, and advertisements specific to the user's location.
                    </p>
                    <p class="m-8 text-white">
                        The Chrome web app allowed people to login, the authentication was done on the freeslots4u site and it allowed 
                        people to play the games in the Chrome app and still take part in the tournaments on the main site.
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
