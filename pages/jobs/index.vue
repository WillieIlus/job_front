<template>
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
      <!-- Start team -->
      <section class="py-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
            <div class="col-span-12 xl:col-span-9">
              <div class="job-list-header">
                <Search />
              </div>
              <div class="space-y-8 mt-14">
                <JobList v-if="paginatedJobs" :jobs="paginatedJobs" :loading="loading" :error="error" />
               </div>
              <!-- start pagination-->
              <section class="pb-20">
                <div class="container mx-auto">
                  <div class="grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                      <div class="text-center">
                        <div class="flex justify-center gap-3 mt-8">
                          <button
                            class="btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20"
                            @click="jobStore.setCurrentPage(jobStore.currentPage - 1)"
                            :disabled="jobStore.currentPage === 1">Previous</button>
                          <span>{{ jobStore.currentPage }} / {{ jobStore.totalPages }}</span>
                          <button
                            class="btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20"
                            @click="jobStore.setCurrentPage(jobStore.currentPage + 1)"
                            :disabled="jobStore.currentPage === jobStore.totalPages">Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- end pagination -->
            </div>
            <div class="col-span-12 space-y-5 lg:col-span-3">
              <Filters />
            </div>
          </div>
        </div>
      </section>
      <!-- End team -->
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const jobStore = useJobStore()
const route = useRoute()

const { loading, error, paginatedJobs, totalPages, currentPage, setCurrentPage } = storeToRefs(jobStore)


const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Jobs',
    to: '/jobs',
  }
]

onMounted(async () => {
  await jobStore.fetchJobs()
})

const pageTitle = 'Jobs'

const title = computed(() => {
  const category = route.params.category || 'All';
  const location = route.params.location || 'Kenya';
  return `Browse ${category} Jobs in ${location}`;
});

const description = computed(() => {
  const category = route.params.category || 'All';
  const location = route.params.location || 'Kenya';
  return `Check out these ${category.toLowerCase()} jobs in ${location.toLowerCase()}. Find your dream job with Alfajir Jobs.`;
});

useHead({
  title: title.value,
  titleTemplate: '%s - Alfajir Jobs',
  meta: [
    // ... other meta tags
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
    { name: 'twitter:description', content: description.value },
  ],
});

</script>