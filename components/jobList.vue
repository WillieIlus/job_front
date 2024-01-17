<template>
  <div v-if="loading">
    loading
  </div>
  <div v-else-if="error">
    error</div>
  <div v-else>
    <!-- loading the list  -->
    <div v-for="job in jobs" :key="job.slug"
      class="my-6 relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
      <div class="p-6">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12 lg:col-span-1">
            <div class="px-2 mb-4 text-center mb-md-0">
              <NuxtLink v-if="job.company" :to="`/companies/${job.company.slug}`">
                <img :src="job.company.logo" alt="" class="mx-auto img-fluid rounded-3 w-60">
              </NuxtLink>
            </div>
          </div>
          <!--end col-->
          <div class="col-span-10">
            <h5 class="mb-1 fs-17">
              <NuxtLink :to="`/jobs/${job.slug}`" class="dark:text-gray-50">{{ job.title }}</NuxtLink>
              <small v-if="job.work_experience !== null" class="font-normal text-gray-500 dark:text-gray-300">
                ({{ job.work_experience }} Yrs Exp )
              </small>

            </h5>
            <ul class="flex flex-wrap mb-0 lg:gap-3 gap-y-3">
              <li>
                <p class="mb-0 text-sm text-gray-500 dark:text-gray-300">{{ job.company ? job.company.name : 'No Company'
                }}</p>
              </li>
              <li>
                <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="mdi mdi-map-marker"></i>
                  {{ job.address }}{{ job.address && job.location ? ', ' : '' }}{{ job.location ? job.location.name : ''
                  }}
                </p>
              </li>
              <li>
                <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="uil uil-wallet"></i> {{ job.salary !==
                  null ? job.currency : '' }} {{ job.salary }} / {{ job.salary_type }}
                </p>
              </li>
            </ul>
            <div class="mt-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="bg-green-500/20 text-green-500 text-11 px-2 py-0.5 font-medium rounded">{{ job.job_type
                }}</span>
                <span v-if="job.is_featured"
                  class="bg-yellow-500/20 text-red-500 text-11 px-2 py-0.5 font-medium rounded">Featured</span>
                <!-- <span class="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span> -->
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <div class="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-span-6">
            <ul class="flex gap-2 text-gray-700 dark:text-gray-50">
              <li v-if="job.category"><span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg></span><span>
                  <NuxtLink :to="`/categories/${job.category.slug}`" class="primary-link text-muted">{{ job.category.name
                  }}
                  </NuxtLink>
                </span>
              </li>
              <li> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg></span>
                <span> {{ job.view_count }}</span>
              </li>
              <li> | </li>
              <li><span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                  </svg></span><span>
                  {{ job.click_count }}</span>
              </li>
            </ul>
          </div>
          <!--end col-->
          <div class="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
            <div class="ltr:lg:text-right rtl:lg:text-left dark:text-gray-50">
              <NuxtLink :to="'mailto:' + job.email ?? job.company.email ?? ''" data-bs-toggle="modal">Apply Now <i
                  class="mdi mdi-chevron-double-right"></i></NuxtLink>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
    </div>
    <!-- end of load list  -->
  </div>
</template>

<script setup>

const props = defineProps({
  jobs: {
    type: Array,
    required: true
  },
  loading: Boolean,
  error: Object
})

</script>