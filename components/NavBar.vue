<template>
  <nav
    class="px-[2rem] py-4 justify-between sm:px-[5rem] sm:py-8 flex flex-col lg:flex-row sm:flex sm:justify-between sm:top-0 sm:w-full bg-[#BBD6B8]">
    <div class="flex justify-between items-center">
      <NuxtLink to="/">
        <h1 class="text-white font-bold text-4xl sm:text-4xl">PORTFOLIO</h1>
      </NuxtLink>
      <button class="focus:outline-none text-white block lg:hidden">
        <VIcon name="mingcute:menu-fill" />
      </button>
    </div>
    <div
      class=" nav-links  top-[-100%] py-5 text-white font-bold sm:shadow-none flex flex-col lg:flex-row text-xl sm:text-xl sm:flex gap-2 sm:gap-8 sm:justify-between">
      <NuxtLink to="/projects" class="hover:text-black py-2">Project</NuxtLink>
      <NuxtLink to="/certificate" class="hover:text-black py-2">Certificate</NuxtLink>
      <NuxtLink to="/article" class="hover:text-black py-2">Articles</NuxtLink>
    </div>





  <!-- <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200">
      <div class="w-5 h-1 bg-gray-600 mb-1"></div>
      <div class="w-5 h-1 bg-gray-600 mb-1"></div>
      <div class="w-5 h-1 bg-gray-600"></div>
      <div class="absolute top-0 right-0 h-screen w-8/12 bg-white border">
        <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
            <NuxtLink to="/projects" class="hover:text-black">Project</NuxtLink>
            <NuxtLink to="/certificate" class="hover:text-black">Certificate</NuxtLink>
            <NuxtLink to="/article" class="hover:text-black">Articles</NuxtLink>
          </ul>
        </div>
      </button> -->
  </nav>
</template>
