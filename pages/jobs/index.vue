<template>
  <div>
    <Head>
      <title> Alfajirijobs | Jobs </title>
      <meta name="description" content="Alfajiri Jobs is a job board for job seekers and employers. Find your dream job today with Alfajiri Jobs." />
      <meta name="twitter:site" content="@alfajirijobs" />
      <meta name="twitter:creator" content="@alfajirijobs" />
      <meta name="twitter:title" content="Alfajiri Jobs" />
      <meta name="twitter:description" content="Alfajiri Jobs is a job board for job seekers and employers. Find your dream job today with Alfajiri Jobs." />
      <meta name="twitter:image" content="https://alfajirijobs.com/assets/images/home/img-01.png" />
      <meta name="twitter:image:alt" content="Alfajiri Jobs" />
      <!-- Open Graph -->
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Alfajiri Jobs" />
      <meta property="og:description" content="Alfajiri Jobs is a job board for job seekers and employers. Find your dream job today with Alfajiri Jobs." />
      <meta property="og:url" content="https://alfajirijobs.com" />
      <meta property="og:site_name" content="Alfajiri Jobs" />
      <meta property="og:image" content="https://alfajirijobs.com/assets/images/home/img-01.png" />
      <meta property="og:image:secure_url" content="https://alfajirijobs.com/assets/images/home/img-01.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Alfajiri Jobs" />          
    </Head>
  </div>
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
      <!-- Start team -->
      <section class="py-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
            <div class="col-span-12 xl:col-span-9">
              <div class="job-list-header">


                <form @submit.prevent="performSearch">
                  <div class="registration-form">
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 xl:col-span-3">
                        <div class="h-full mt-3">
                          <i class="uil uil-briefcase-alt"></i>
                          <input class="w-full h-full px-4 py-2 dark:text-gray-100 border mb-2" type="text"
                            name="searchTitle" v-model="searchTitle" placeholder="Search by title: job..." />
                        </div>
                      </div><!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <div class="mt-3 filter-search-form mt-md-0 filter-border">
                          <i class="uil uil-map-marker"></i>
                          <select class="form-select w-full" v-model="selectedCategory"
                            @change="selectCategory($event.target.value)">
                            <option value="">All Categories</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{
                              category.name }}</option>
                          </select>
                        </div>
                      </div><!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <div class="mt-3 filter-search-form mt-lg-0">
                          <i class="uil uil-clipboard-notes"></i>
                          <select class="form-select w-full" v-model="selectedLocation"
                            @change="selectLocation($event.target.value)">
                            <option value="">All Locations</option>
                            <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name
                            }}</option>
                          </select>
                        </div>
                      </div><!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <div class="h-full mt-3">
                          <button @click="performSearch" type="submit"
                            class="btn group-data-[theme-color=violet]:bg-violet-400 group-data-[theme-color=sky]:bg-sky-400 group-data-[theme-color=red]:bg-red-400 group-data-[theme-color=green]:bg-green-400 group-data-[theme-color=pink]:bg-pink-400 group-data-[theme-color=blue]:bg-blue-400 border rounded-lg border-transparent ltr:xl:rounded-l-none rtl:xl:rounded-r-none w-full py-[18px] text-white"><i
                              class="uil uil-search me-1"></i> Find Job</button>
                        </div>
                      </div><!--end col-->
                    </div><!--end row-->
                  </div>
                </form>



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
import { Form, Field } from 'vee-validate'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const jobStore = useJobStore()
const route = useRoute()

const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

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

const searchTitle = ref('')
const selectedCategory = ref('')
const selectedLocation = ref('')
const submitting = ref(false)

const performSearch = async () => {
  submitting.value = true
  try {
    await jobStore.fetchJobs({
      title: searchTitle.value,
      location: selectedLocation.value,
      category: selectedCategory.value,
    })
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
  }
}

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const debouncedSearch = debounce(performSearch, 3000)

watch(searchTitle, debouncedSearch)

onMounted(async () => {
  await jobStore.fetchJobs()
  await categoryStore.fetchCategories()
  await locationStore.fetchLocations()
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