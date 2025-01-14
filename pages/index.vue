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
      content: 'Rob Beach - A full stack developer that creates professional and functional websites.'
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