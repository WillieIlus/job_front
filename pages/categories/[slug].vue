
<template>
  <div>
    <Head>
      <title> Alfajirijobs | {{ category.name }} </title>
      <meta name="description" content="{{ category.description }}" />
      <meta name="twitter:site" content="@alfajirijobs" />
      <meta name="twitter:creator" content="@alfajirijobs" />
      <meta name="twitter:title" content="{{ category.name }}" />
      <meta name="twitter:description" content="{{ category.description }}" />
      <meta name="twitter:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta name="twitter:image:alt" content="{{ category.name }}" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="{{ category.name }}" />
      <meta property="og:description" content="{{ category.description }}" />
      <meta property="og:url" content="https://alfajirijobs.com" />
      <meta property="og:site_name" content="{{ category.name }}" />
      <meta property="og:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta property="og:image:secure_url" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="{{ category.name }}" />
    </Head>
  </div>
  
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
      <section class="py-20">
        <div class="container mx-auto">
          <!-- display loading-->
          <div v-if="loading">
            <p>Loading...</p>
          </div>
          <!-- display error-->
          <div v-if="error">
            <p>{{ error }}</p>
          </div>
          <div v-if="category">
            <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
              <div class="col-span-12 lg:col-span-6 lg:col-start-4">
                <div class="mb-5 text-center">
                  <h4 class="mt-2 text-gray-900 text-22 dark:text-white">Browse Jobs under {{ category.name }}</h4>
                  <p class="mt-2 text-gray-500 dark:text-gray-300">{{ category.description ? category.description : '' }}
                  </p>
                </div>
              </div>
            </div>
            <div v-if="jobs">
              <JobList :jobs="jobs" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'

import { useCategoryStore } from '~/store/categories'
import { useJobStore } from '~/store/jobs'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()

const route = useRoute();

const { category, loading, error } = storeToRefs(categoryStore);
const { jobs, } = storeToRefs(jobStore)

const { fetchCategory } = categoryStore;
const { fetchJobs } = jobStore

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Categories',
    to: '/categories',
  },
  {
    label: 'Category',
    to: route.fullPath,
  },
];

const pageTitle = route.params.slug || 'Category';

onMounted(async () => {
  await fetchCategory(route.params.slug);
  const categoryId = category.value.id || 1
  await fetchJobs({ category: categoryId })

});

</script> 