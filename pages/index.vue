<template>
  <div>
    <Head>
      <title>Alfajiri Jobs</title>
      <meta name="description" content="Alfajiri Jobs is a job board for job seekers and employers. Find your dream job today with Alfajiri Jobs." />
      <meta name="keywords" content="job board, job portal, job search, job listing, job site, job website, job board website, job board portal, job board theme, job board template, job board software, job board script, job board platform, job board app, job board application, job board design, job board development, job board directory, job board directory theme, job board directory template, job board directory software, job board directory script, job board directory platform, job board directory app, job board directory application, job board directory design, job board directory development, job board directory website, job board directory portal, job board directory theme, job board directory template, job board directory software, job board directory script, job board directory platform, job board directory app, job board directory application, job board directory design, job board directory development, job board directory website, job board directory portal" />
      <meta name="author" content="Alfajiri Jobs" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Alfajiri Jobs" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <!-- twitter card-->
      <meta name="twitter:card" content="summary_large_image" />
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
      <!-- start home -->
      <section
        class="relative py-64 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 group-data-[mode=dark]:bg-neutral-900 ">
        <div class="inset-0 absolute bg-[url('~/assets/images/home/img-01.png')] bg-center"></div>
        <div class="container relative mx-auto">
          <div class="grid items-center grid-cols-12 rtl:gap-10">
            <div class="col-span-12 col-start-2">
              <div class="mb-3 text-center ltr:mr-14 rtl:ml-14">
                <h1 class="mb-3 text-5xl leading-tight text-white fw-semibold">Find your dream job
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
          <JobList v-if="paginatedJobs" :jobs="paginatedJobs" :loading="loading" :error="error" />
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
const { paginatedJobs } = storeToRefs(jobStore)
const { paginatedCategories } = storeToRefs(categoryStore);

onMounted(async () => {
  await jobStore.fetchJobs()
  await categoryStore.fetchCategories();
});
</script>