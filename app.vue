<template>
  <NuxtLayout>
    <NavigationTop/>
    <NavigationBar/>
    <NuxtPage />
    <NavigationFooter/>
  </NuxtLayout>
</template>
<script setup >
useHead({
  title: 'Alfajiri Jobs',
  meta: [
    { name: 'description', content: 'Browse the best and top jobs in Kenya.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})
</script>


