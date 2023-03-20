<template>
    <div>
    <NavBar />
        <div class="sm:mt-[-100px] mt-[80px]">
            <h1 class="text-black font-bold text-4xl text-center sm:pb-[12px] sm:text-center sm:mt-[150px]">
                ARTICLES
            </h1>
            <div class="flex justify-center">
                <hr class="border-[#BBD6B8] border-2 w-[200px]">
            </div>
        </div>
        <div class="sm:grid grid-cols-2 gap-5 py-10 px-10">
            <div v-for="(article, index) in article.posts" key: index class="px-10 py-10">
                <img :src="`https://source.unsplash.com/random/?${article.tags[1]}`"
                    class="w-[800px] h-[300px] md:w-[800px] md:h-[300px] sm:mt-[-30px] " alt="photos"
                    data-aos="flip-left" />
                <div class="text-base text-purple-500 sm:mt-[10px]">Olivia Rhye • 20 Mar 2023</div>
                <NuxtLink :to="`/article/${article.id}`" class="text-center text-xl font-bold  sm:mt-[10px]">{{
                    article.title }}</NuxtLink>
                <div class="text-justify text-base sm:mt-[10px] truncate">{{ article.body }}</div>
            </div>
        </div>
    <Footer />
</div>
</template>

<script setup>
definePageMeta({
    layout: 'article'
})
const { data: article } = await useFetch('https://dummyjson.com/posts')
</script>
