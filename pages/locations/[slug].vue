
<template><div>
  <Head>
    <title> Alfajirijobs | {{ location.name }} </title>
    <meta name="description" content="{{ location.description }}" />
    <meta name="twitter:site" content="@alfajirijobs" />
    <meta name="twitter:creator" content="@alfajirijobs" />
    <meta name="twitter:title" content="{{ location.name }}" />
    <meta name="twitter:description" content="{{ location.description }}" />
    <meta name="twitter:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
    <meta name="twitter:image:alt" content="{{ location.name }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ location.name }}" />
    <meta property="og:description" content="{{ location.description }}" />
    <meta property="og:url" content="https://alfajirijobs.com" />
    <meta property="og:site_name" content="{{ location.name }}" />
    <meta property="og:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
    <meta property="og:image:secure_url" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="{{ location.name }}" />
  </Head>
</div>

  <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 

  <CardsBase>
    <h1>Locations</h1>
    <div v-if="locations">
      <div v-for="location in locations" :key="location.id">
        <NuxtLink :to="`/locations/${location.slug}`">{{ location.name }}</NuxtLink>
        <p>{{ location.description }}</p>
      </div>
    </div>
    <!-- display loading-->
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <!-- display error-->
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </CardsBase>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useLocationStore } from '@/store/locations';
import { useRouter, useRoute } from 'vue-router';

const locationStore = useLocationStore()

const { location, loading, error } = storeToRefs(locationStore)
const router = useRouter()
const route = useRoute()

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Locations',
    to: '/locations',
  },
  {
    label: 'route.params.slug' || 'Location',
    to: route.fullPath,
  }
]

const pageTitle = 'route.params.slug' || 'Location'

const { fetchLocation } = locationStore;

onMounted(async () => {
  await fetchLocation(router.currentRoute.value.params.slug);
});


</script> 