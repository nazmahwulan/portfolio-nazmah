<template>
    <div>
        <NavBar />
        <ArticleDetail :article="article" />
        <Footer />
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = 'https://dummyjson.com/posts/' + id

// fetch the product
const { data: article } = await useFetch(url, { key: id })

definePageMeta({
    layout: 'article'
})
</script>