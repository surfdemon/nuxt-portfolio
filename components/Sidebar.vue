<template>
    <nav class="bg-black text-white p-3 w-max fixed top-1/3 right-0 rounded-tl-md rounded-bl-md ">
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
</template>

<script setup>

</script>

<style>
.router-link-active{ 
    @apply bg-blue-500 text-white;      
}
.router-link-exact-active{
    @apply bg-blue-500 text-white;
}

</style>

