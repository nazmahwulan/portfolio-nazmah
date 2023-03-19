<template>
    <div>
        <p>{{ article.title }}</p>
        <p>{{ article.price }}</p>
        <p>{{ article.id }}</p>
        <p>{{ article.image }}</p>
        <p>{{ article. description }}</p>
        <p>{{ article. category }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product
const { data: article } = await useFetch(uri, {key:id})

definePageMeta({
    layout: 'article'
})
</script>