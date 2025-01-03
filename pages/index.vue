<template>
  <div>
    <HeroArea />
  </div>
</template>

<script  setup>
useHead({
  title: 'Home Page',
  meta: [
    {
      name: 'description',
      content: 'This is the home page'
    }
  ]
})
</script>

<style>
* { 
  /* color:  rgb(147 197 253 / var(--tw-text-opacity, 1)) */
  color: white;
}
body{ 
  background-color: black;
}
</style>