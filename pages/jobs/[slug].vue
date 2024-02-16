<template>
  <div>
    <Head>
      <title> Alfajirijobs | {{ job.title }} </title>
      <!-- job.description for metatag description-->
      <meta name="description" content="{{ job.description }}" />
      <meta property="og:title" content="{{ job.title }}" />
      <meta property="og:description" content="{{ job.description }}" />
      <meta property="og:url" content="https://alfajirijobs.com" />
      <meta property="og:site_name" content="Alfajiri Jobs" />
      <meta property="og:image" content="{{ job.image }}" />
      <meta property="og:image:secure_url" content="{{ job.image }}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="{{ job.title }}" />
      <meta name="twitter:title" content="{{ job.title }}" />
      <meta name="twitter:description" content="{{ job.description }}" />
      <meta name="twitter:image" content="{{ job.image }}" />
      <meta name="twitter:image:alt" content="{{ job.title }}" />
      <meta name="twitter:site" content="@alfajirijobs" />
      <meta name="twitter:creator" content="@alfajirijobs" />
      <meta name="twitter:title" content="Alfajiri Jobs" />
      <meta name="twitter:description" content="{{ job.description }}" />
      <meta name="twitter:image" content="{{ job.image }}" />
      <meta name="twitter:image:alt" content="{{ job.title }}" />
    </Head>
  </div>
  <div v-if="loading">
    loading
  </div>
  <div v-else-if="error">
    error</div>
  <div v-else>
    <div class="main-content">
      <div class="page-content">
        <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
        <!-- Start grid -->
        <section v-if="job" class="py-16">
          <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
              <div class="col-span-12 lg:col-span-8">
                <div class="border rounded-md border-gray-100/30 dark:border-neutral-600/80">
                  <div class="relative">
                    <!-- Use object-cover to fill the container -->
                    <img v-if="job.image" :src="job.image" alt="" class="rounded-md img-fluid mb-7 object-cover">
                    <div class="absolute z-20 -bottom-7 left-7">
                      <!-- Use w-5 and h-5 to set the logo size to 20px -->
                      <img :src="job.company.logo" :alt="job.company.title" class="rounded-md img-fluid w-24 h-24">
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 lg:col-span-8">
                        <div class="relative">
                          <h5 class="mb-1 text-gray-900 dark:text-gray-50">{{ job.title }}</h5>
                          <ul class="flex gap-4 text-gray-500 dark:text-gray-300">
                            <li>
                              <i class="mdi mdi-account"></i> {{ job.vacancies }} Vacancy(ies)
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-4">
                        <div class="flex gap-3 md:justify-end">
                          <div
                            class="w-8 h-8 text-center text-gray-600 transition-all duration-300 bg-red-300 border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <i class="uil uil-heart-alt text-lg leading-[1.8]"></i>{{ job.view_count }}
                          </div>
                          <div
                            class="w-8 h-8 text-center text-gray-600 transition-all duration-300 bg-red-300 border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <i class="uil uil-setting text-lg leading-[1.8]"></i>{{ job.click_count }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                      <div class="col-span-12 lg:col-span-3">
                        <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Experience</p>
                          <p class="font-medium text-gray-900 dark:text-gray-50">{{ job.work_experience ?? 'N/A' }} Year
                          </p>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-3">
                        <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Employee type</p>
                          <p class="font-medium text-gray-900 dark:text-gray-50">{{ job.work_type ?? 'N/A' }}</p>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-3">
                        <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Job Type</p>
                          <p class="font-medium text-gray-900 dark:text-gray-50">{{ job_type ?? 'N/A' }}</p>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-3">
                        <div v-if="job.salary" class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Offer Salary</p>
                          <p class="font-medium text-gray-900 dark:text-gray-50">{{ job.salary !==
                            null ? job.currency : '' }} {{ job.salary }} / {{ job.salary_type }} </p>
                        </div>
                      </div>
                    </div>

                    <div class="mt-5">
                      <h5 class="mb-3 text-gray-900 dark:text-gray-50">Job Description</h5>
                      <div>
                        <p class="mb-0 text-gray-500 dark:text-gray-300">{{ job.description }}</p>
                      </div>
                    </div>

                    <div class="mt-5">
                      <h5 class="mb-3 text-gray-900 dark:text-gray-50">Responsibilities</h5>
                      <div>
                        <p class="mb-3 text-gray-500 dark:text-gray-300">{{ job.responsibilities }}</p>
                      </div>
                    </div>

                    <div class="mt-5">
                      <h5 class="mb-3 text-gray-900 dark:text-gray-50">Requirements</h5>
                      <div>
                        <p class="mb-3 text-gray-500 dark:text-gray-300">{{ job.requirements }}</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="mt-10 space-y-8">
                  <h5 class="text-gray-900 dark:text-gray-50">Related Jobs</h5>

                  <JobList :jobs="jobs" />

                  <div class="mt-4 text-center">
                    <NuxtLink :to="`/categories/${job.category.slug}`"
                      class="font-medium text-gray-900 dark:text-gray-50">View More <i class="mdi mdi-arrow-right"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-span-12 space-y-6 lg:col-span-4">
                <div class="border rounded border-gray-100/30 dark:border-neutral-600/80">
                  <div class="p-6">
                    <h6 class="text-gray-900 text-17 dark:text-gray-50">Job Overview</h6>

                    <ul>
                      <li>
                        <div class="flex mt-6">
                          <i
                            class="uil uil-user icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Job Title</h6>
                            <p class="text-gray-500 dark:text-gray-300">{{ job.title }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div v-if="job.work_experience !== null" class="flex mt-6">
                          <i
                            class="uil uil-star-half-alt icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Experience</h6>
                            <p class="text-gray-500 dark:text-gray-300"> {{ job.work_experience }} Years</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div v-if="job.location !== null" class="flex mt-6">
                          <i
                            class="uil uil-location-point icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Location</h6>
                            <p class="text-gray-500 dark:text-gray-300"> {{ job.location ? job.location.name : '' }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div v-if="job.salary !== null" class="flex mt-6">
                          <i
                            class="uil uil-usd-circle icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Offered Salary</h6>
                            <p class="text-gray-500 dark:text-gray-300"> {{ job.salary !== null ? job.currency : 'N/A' }}
                              {{
                                job.salary }} / {{ job.salary !== null ? job.salary_type : 'N/A' }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div v-if="job.education_level !== null" class="flex mt-6">
                          <i
                            class="uil uil-graduation-cap icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Qualification</h6>
                            <p class="text-gray-500 dark:text-gray-300">{{ job.education_level }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex mt-6">
                          <i
                            class="uil uil-building icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Category</h6>
                            <p class="text-gray-500 dark:text-gray-300"> {{ job.category.name ?? 'N/A' }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex mt-6">
                          <i
                            class="uil uil-history icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                          <div class="ltr:ml-4 rtl:mr-4">
                            <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Date Posted</h6>
                            <p class="text-gray-500 dark:text-gray-300">{{ job.timesince }}</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div class="mt-8 space-y-2">
                      <NuxtLink v-if="job.company" :to="'mailto:' + job.email ?? job.company.email ?? ''"
                        class="btn w-full group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5">
                        Apply
                        Now <i class="uil uil-arrow-right"></i></NuxtLink>
                      <!-- <NuxtLink to=""
                        class="btn w-full bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30">
                        <i class="uil uil-bookmark"></i> Add Bookmark
                      </NuxtLink> -->
                    </div>
                  </div>
                </div>
                <div v-if="job.company" class="border rounded border-gray-100/30 dark:border-neutral-600/80">
                  <div class="p-6">
                    <div>
                      <img :src="job.company.logo" alt="Logo" class="mx-auto img-fluid">
                      <div class="mt-4 text-center">
                        <h6 class="text-gray-900 text-17 dark:text-gray-50"> {{ job.company ? job.company.name : 'N/A' }}
                        </h6>
                        <p class="text-gray-500 dark:text-gray-300 Since July 2017"></p>
                      </div>

                      <ul class="mt-4 space-y-4">
                        <li>
                          <div class="flex">
                            <i
                              class="text-xl uil uil-phone-volume group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div class="ltr:ml-3 rtl:mr-3">
                              <h6 class="mb-1 text-sm text-gray-900 dark:text-gray-50">Phone</h6>
                              <p class="text-sm text-gray-500 dark:text-gray-300">{{ job.company ? job.company.phone :
                                'N/A' }} </p>
                            </div>
                          </div>
                        </li>
                        <li class="mt-3">
                          <div class="flex">
                            <i
                              class="text-xl uil uil-envelope group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div class="ltr:ml-3 rtl:mr-3">
                              <h6 class="mb-1 text-sm text-gray-900 dark:text-gray-50">Email</h6>
                              <p class="text-sm text-gray-500 dark:text-gray-300">{{ job.company ? job.company.email :
                                'N/A' }} </p>
                            </div>
                          </div>
                        </li>
                        <li class="mt-3">
                          <div class="flex">
                            <i
                              class="text-xl uil uil-globe group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div class="ltr:ml-3 rtl:mr-3">
                              <h6 class="mb-1 text-sm text-gray-900 dark:text-gray-50">Website</h6>
                              <p class="mb-0 text-gray-500 dark:text-gray-300 fs-14 text-break">
                                {{ job.company ? job.company.website : 'N/A' }} </p>
                            </div>
                          </div>
                        </li>
                        <li v-if="job.location !== null" class="mt-3">
                          <div class="flex">
                            <i
                              class="text-xl uil uil-map-marker group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div class="ltr:ml-3 rtl:mr-3">
                              <h6 class="mb-1 text-sm text-gray-900 dark:text-gray-50">Location</h6>
                              <p class="text-sm text-gray-500 dark:text-gray-300">{{ job.address ?? '' }}, {{
                                job.location.name ?? '' }}</p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div class="mt-6">
                        <NuxtLink :to="`/companies/${job.company.slug}`"
                          class="w-full text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          <i class="mdi mdi-eye"></i> View Profile
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End grid -->

      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()

const { job, jobs, loading, error } = storeToRefs(jobStore)
const route = useRoute()
const router = useRouter()

const jobData = (job ?? {}).value?.title ?? 'Job Detail';
const locationData = (job ?? {}).value?.location ?? '... '

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Jobs',
    to: '/jobs',
  },
  {
    label: 'Job Details',
    to: route.fullPath,
  }
]

const pageTitle = jobData || 'Job Detail'

const title = computed(() => {
  const jobTitle = jobData || 'Job detail';
  const locationName = locationData || 'Kenya';
  return `${jobTitle} Job vacancy in ${locationName}`;
});

const description = computed(() => {
  const jobTitle = jobData || 'Job detail';
  const locationName = locationData || 'Kenya';
  const lowerCaseJobTitle = typeof jobTitle === 'string' ? jobTitle.toLowerCase() : jobTitle;
  const lowerCaseLocationName = typeof locationName === 'string' ? locationName.toLowerCase() : locationName;

  return `Check out this ${lowerCaseJobTitle} jobs in ${lowerCaseLocationName}.`;
});

useHead({
  title: title.value,
  titleTemplate: '%s - Alfajir Jobs',
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
    { name: 'twitter:description', content: description.value },
  ],
});

onMounted(async () => {
  await jobStore.fetchJob(route.params.slug)
  const categoryId = job.category || 1
  await jobStore.fetchJobs({ category: categoryId })
})

</script>

