<template>
    <NavBar />
 <div>
   <div class="grid grid-cols-4 gap 5">
    <div v-for="p in article">
       <NuxtLink :to="`/article/${p.id}`">{{ p.title }}</NuxtLink>
    </div>
   </div>
 </div>  
    <Footer />
</template>

<script setup>
definePageMeta({
    layout:'article'
})

 const {data: article} = await useFetch('https://fakestoreapi.com/products')
</script>