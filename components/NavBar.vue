<template>
  <nav class="px-[5rem] py-8 flex flex-row justify-between fixed top-0 w-full">
    <div>
      <NuxtLink to="/">
        <h1 class="text-black font-bold text-4xl">Portfolio</h1>
      </NuxtLink>
    </div>

    <div class=" shadow-lg sm:shadow-none flex gap-6">
      <NuxtLink to="/projects" class="navbar text-left text-xl" aria-label="Projects">Project</NuxtLink>
      <NuxtLink to="/about" class="navbar text-left text-xl" aria-label="About Me">About Me</NuxtLink>
      <NuxtLink to="/education" class="navbar text-left text-xl" aria-label="Education">Education</NuxtLink>
      <NuxtLink to="/certificate" class="navbar text-left text-xl" aria-label="Certificate">Certificate</NuxtLink>
    </div>
  </nav>
</template>

<style>
.navbar:hover {
  color: #dc2626;
  transition: all ease-in-out 0.3s;
}
</style>
