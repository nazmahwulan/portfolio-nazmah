<template>
    <div class="p-3 rounded-md bg-white shadow-md h-full text-center">
        <img :src="article.image" alt="article thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ article.title }}</p>
        <NuxtLink :to="`/article/${article.id}`">
            <p class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm text white my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { article } = defineProps(['article'])    
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70px;
    margin: 0 auto;
}
</style>