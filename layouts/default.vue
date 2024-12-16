<template>
  <div>
    <nav>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/portfolio">Portfolio</nuxt-link>   
            </li>
        </ul>
    </nav>
    <slot />
  </div>
</template>

<script setup>

</script>

<style>

</style>