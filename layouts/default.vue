<template>
  <div class="main-container">
    <Sidebar />
    
    <NuxtPage />
  </div>
</template>

<script setup>

</script>

<style>
body { 
    width: 100vw; 
    height: 100vh;
    background-image: linear-gradient(to left top, rgb(16, 16, 189) 0%/*bottom-right color*/, rgba(28, 27, 28, 0.5) 100% /*middle color*/, rgb(13, 11, 188) 100% /*top-left color*/),
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))/*"faked" black background make sure to add last or it will appear before the transparent/colored layer*/;
    background-attachment: fixed;
}
</style>