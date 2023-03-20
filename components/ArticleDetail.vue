<template>
        <div class="lg:grid grid-cols-2 gap-10 px-10 py-10 sm:items-center ">
            <div class=" lg:flex sm:w-[480px] sm:h-[300px] md:w-[600px] md:h-[300px] justify-center mx-auto w-[300px] h-[300px] bg-[url('https://source.unsplash.com/random/')]"></div>
            <div class="items-center">
                <h2 class="font-bold text-4xl my-7 sm:px-10 md:px-20">{{ article.title }}</h2>
                <p class="mb-7 text-justify sm:px-10 md:px-20">{{ article.body }}</p>
            </div>
        </div>
</template>

<script setup >
const { article } = defineProps(['article'])
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>