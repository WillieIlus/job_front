<template>
  <Underconstruction />
</template>
<script setup>

const title = "Company Details"
const description = "Check out these companies"

useHead({
  title: title,
  titleTemplate: '%s - Alfajir Jobs',
  meta: [
    { name: 'description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://alfajirjobs.com/image.jpg' },
    { name: 'twitter:site', content: '@alfajirjobs' }
  ],
});
</script>
