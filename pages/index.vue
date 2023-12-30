<template>
  <div class="main-content">
    <div class="page-content">
      <!-- start home -->
      <section
        class="relative py-64 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 group-data-[mode=dark]:bg-neutral-900 ">
        <div class="inset-0 absolute bg-[url('~/assets/images/home/img-01.png')] bg-center"></div>
        <div class="container relative mx-auto">
          <div class="grid items-center grid-cols-12 rtl:gap-10">
            <div class="col-span-12 col-start-2">
              <div class="mb-3 text-center ltr:mr-14 rtl:ml-14">
                <h1 class="mb-3 text-5xl leading-tight text-white fw-semibold">Find your dream jobs
                  with
                  <br><span class="text-yellow-500 fw-bold">Today</span> with Alfajiri
                  Jobs.
                </h1>
                <p class="text-white text-17">Explore endless opportunities, one click away.</p>
              </div>
              <!-- search form -->
              <Search />
              <!-- end search form -->
            </div>
          </div>
        </div>
        <img src="~/assets/images/bg-shape.png" alt="" class="absolute block -bottom-5 dark:hidden">
        <img src="~/assets/images/bg-shape-dark.png" alt="" class="absolute hidden -bottom-5 dark:block">
      </section>
      <TopCategories :categories="paginatedCategories" />
      <section class="py-20 bg-gray-50 dark:bg-neutral-700">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 gap-5">
            <div class="mb-5 text-center">
              <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Gateway to Fresh Opportunities</h3>
              <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">Discover a world of possibilities: New jobs, every day.<br> freelancers.</p>
            </div>
          </div>
          <JobList :jobs="jobs" :loading="loading" :error="error" />
        </div>
      </section>

    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories';
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore();
const jobStore = useJobStore()
const { jobs } = storeToRefs(jobStore)
const { paginatedCategories } = storeToRefs(categoryStore);

onMounted(async () => {
  await jobStore.fetchJobs()
  await categoryStore.fetchCategories();
});
</script>