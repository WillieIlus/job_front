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
              <PopularJobs />
              <div class="space-y-8 mt-14">
                <JobList :jobs="jobs" :loading="loading" :error="error"/> 
              </div>
              <NavigationPagination />
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
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const route = useRoute()

const { jobs, loading, error, } = storeToRefs(jobStore)


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

const pageTitle = 'Jobs'

onMounted(async () => {
  await jobStore.fetchJobs()
})
</script>