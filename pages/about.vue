<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-black to-blue-900 py-6 h-72" >
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-left">
            <h1 class="text-5xl font-bold mb-6 font-heading">About Me</h1>
            <p class="text-xl text-blue-300">
              Software Engineer &amp; Problem Solver with a passion for creating elegant solutions
            </p>
          </div>
          <div class=" hidden d-none md:flex justify-center">
            <img 
              src="/assets/img/rob-on-beach.png" 
              alt="Profile"
              class="w-64 h-64 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-16">
      <!-- Journey Section -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-8 font-heading text-blue-400">My Journey</h2>
        <div class="">
          <div class="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
            <p class="text-gray-300 leading-relaxed">
              With over 22 years experience in technical support, managerial roles, &amp; website 
              development, I've worked on various projects. Starting out as a installation engineer 
              I progressed to technical support and then support desk manager. For the past 14 years 
              I've been working as a technical operations manager running an affiliate company that 
              had over 50 websites. Building &amp; maintaining all their websites &amp; managing their 
              freelance developers.
            </p>              
          </div>
          <!-- <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-900/20 p-4 rounded-lg border border-blue-800 text-center">
              <div class="text-3xl font-bold text-blue-400">14+</div>
              <div class="text-gray-300">Years Experience</div>
            </div>
            <div class="bg-blue-900/20 p-4 rounded-lg border border-blue-800 text-center">
              <div class="text-3xl font-bold text-blue-400">25+</div>
              <div class="text-gray-300">Projects Completed</div>
            </div>
            <div class="bg-blue-900/20 p-4 rounded-lg border border-blue-800 text-center">
              <div class="text-3xl font-bold text-blue-400">30+</div>
              <div class="text-gray-300">Happy Clients</div>
            </div>
            <div class="bg-blue-900/20 p-4 rounded-lg border border-blue-800 text-center">
              <div class="text-3xl font-bold text-blue-400">15+</div>
              <div class="text-gray-300">Technologies</div>
            </div>
          </div> -->
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-8 font-heading text-blue-400">Experience</h2>
        <div class="space-y-6">
          <div v-for="(job, index) in experience" :key="index" 
               class="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-blue-300">{{ job.title }}</h3>
                <div class="text-gray-400">{{ job.company }}</div>
              </div>
              <div class="text-blue-400">{{ job.period }}</div>
            </div>
            <p class="text-gray-300">{{ job.description }}</p>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-8 font-heading text-blue-400">Skills & Expertise</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(category, index) in skills" :key="index"
               class="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
            <h3 class="text-xl font-bold mb-4 text-center text-blue-300">{{ category.title }}</h3>
            <div class="space-y-2">
              <div v-for="skill in category.items" :key="skill"
                   class="bg-blue-900/40 p-2 rounded text-center text-blue-200">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interests Section -->
      <section>
        <h2 class="text-3xl font-bold mb-8 font-heading text-blue-400">Personal Interests</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="interest in interests" :key="interest.name"
               class="bg-blue-900/20 p-6 rounded-lg border border-blue-800 text-center">
            <div class="text-xl mb-2 text-blue-300">{{ interest.name }}</div>
            <p class="text-gray-400">{{ interest.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    title: 'Technical Operations Manager',
    company: 'Atelm Ltd',
    period: '2008 - 2022',
    description: 'As the technical operations manager I was responsible for the day to day running of the company. I managed a team of developers and a designer and was responsible for the development and maintenance of over 50 websites. The main technologies that i used was HTML, CSS, JavaScript, PHP, & MySQL.'
  },
  {
    title: 'Technical Support & Support Desk Manager',
    company: 'Pericom Ltd & FWBS Ltd',
    period: '2005 - 2008',
    description: 'Starting off working in technical support I quickly progressed to support desk manager. I was responsible for the day to day running of the support desk and the technical support team. I was also responsible for the SDK support calls, handling calls related to C# and MSSQL customisation problems.'
  },
  {
    title: 'Computer Installation Engineer & Technical Support',
    company: 'Synstar International',
    period: '1999 - 2005',
    description: 'I started out as a computer installation engineer installing computers and networks for various companies. I then progressed to technical support covering both hardware and software support from 1st line through to 3rd line support.'
  },
];

const skills = [
  {
    title: 'Frontend',
    items: ['Vue.js', 'React', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'MySQL']
  },
  {
    title: 'DevOps',
    items: ['Github', 'Apache', 'CentOS', 'Nginx']
  }
];

const interests = [
  {
    name: 'Open Source',
    description: 'Would love to contribute one day'
  },
  {
    name: 'Programming',
    description: 'Exploring new languages and frameworks'
  },
  {
    name: 'Technology',
    description: "I'm a sucker for gadgets"
  },
  {
    name: 'Helping',
    description: 'Helping others especially with tech'
  }
];

useHead({
    title: 'About Rob Beach',
    meta: [
        {
            name: 'description',
            content: 'Information about me (Rob Beach) and my journey as a software engineer'
        }
    ]
})
</script>