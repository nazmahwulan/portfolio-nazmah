<template>
  <nav
    class="px-8 py-8 justify-between sm:px-20 sm:py-8 flex flex-col lg:flex-row sm:flex sm:justify-between sm:top-0 sm:w-full bg-[#BBD6B8]">
    <div class="flex justify-between items-center">
      <NuxtLink to="/">
        <h1 class="text-white font-bold text-4xl sm:text-4xl">PORTFOLIO</h1>
      </NuxtLink>
      <button class="block lg:hidden" @click="openMenu = true">
        <VIcon  class="text-white" name="mingcute:menu-fill" />
      </button>
    </div>
    <transition name="slide">
      <div
        class="hidden sm:py-0 text-white bg-[#BBD6B8] font-bold sm:shadow-none text-xl sm:text-xl lg:flex gap-2 sm:gap-8 sm:justify-between">
        <NuxtLink to="/projects" class="hover:text-black py-2">Project</NuxtLink>
        <NuxtLink to="/certificate" class="hover:text-black py-2">Certificate</NuxtLink>
        <NuxtLink to="/article" class="hover:text-black py-2">Articles</NuxtLink>
      </div>
    </transition>
    <div :class="openMenu ? 'left-[50%] lg:left-[100%]' : 'left-[100%]'"
      class=" bg-[#BBD6B8] text-white text-center fixed z-20 top-0 left-[100%] transition-all w-1/2 h-screen flex items-center justify-center">
      <!-- <button @click="openMenu = false" class='text-3xl block lg:hidden py-5 absolute top-2 right-6'><i
        class="bi bi-x-lg"></i></button> -->
      <button class="text-3xl block lg:hidden py-5 absolute top-2 right-6" @click="openMenu = false">
        <VIcon name="heroicons-solid:x" />
      </button>
      <div class="container mx-auto flex flex-col items-center justify-between gap-7 text-xl font-bold">
        <NuxtLink to="/projects" class="hover:text-black py-2">Project</NuxtLink>
        <NuxtLink to="/certificate" class="hover:text-black py-2">Certificate</NuxtLink>
        <NuxtLink to="/article" class="hover:text-black py-2">Articles</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
// export default {
//   data() {
//     return {
//       openMenu: false
//     }
//   }
// }\
const openMenu = ref(false)

</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
