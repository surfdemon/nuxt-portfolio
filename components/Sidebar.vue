<template>
    <div>
      <button @click="toggleSidebar" class="md:hidden fixed top-4 right-4 z-50">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav 
        :class="['bg-black text-white p-3 w-content fixed h-content top-[4rem] right-0 rounded-tl-md rounded-bl-md transition-transform duration-300 transform', { 'translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }]" 
        class="md:translate-x-0 md:fixed md:top-1/4 md:right-0 md:w-content md:h-content md:bg-black md:text-white md:p-3 md:rounded-tl-md md:rounded-bl-md md:transition-transform md:duration-300 md:transform"
      >
        <ul>
          <li class="my-5 text-center">
            <nuxt-link to="/" class="p-3 my-2 rounded-md text-center">Home</nuxt-link>
          </li>
          <li class="my-5 text-center">
            <nuxt-link to="/about" class="p-3 my-2 rounded-md text-center">About</nuxt-link>
          </li>
          <li class="my-5 text-center">
            <nuxt-link to="/contact" class="p-3 my-2 rounded-md text-center">Contact</nuxt-link>
          </li>
          <li class="my-5 text-center">
            <nuxt-link to="/portfolio" class="p-3 my-2 rounded-md text-center">Portfolio</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
    }
  };
  </script>

<style>
.router-link-active{ 
    @apply bg-blue-500 text-white;      
}
.router-link-exact-active{
    @apply bg-blue-500 text-white;
}

</style>

