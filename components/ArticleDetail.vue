<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ article.title }}</h2>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Artikel description</h3>
                <p class="mb-7">{{ article.body }}</p>
            </div>
        </div>
    </div>
</template>

<script setup >
const { article } = defineProps(['article'])
</script>

<style scoped>
img {
    max-width : 400px;
}
</style>