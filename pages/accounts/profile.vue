<template>
  <div class="main-content">
    <div class="page-content">
      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-4">
              <div class="border rounded border-gray-100/50 dark:border-neutral-600">
                <div class="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <div class="text-center">
                    <img class="w-20 h-20 p-1 mx-auto border-2 rounded-full border-gray-200/20" :src="user.avatar"
                      alt="avatar">
                    <h6 class="mt-4 mb-0 text-lg text-gray-900 dark:text-gray-50">{{ user.first_name }} {{ user.last_name
                    }}</h6>
                    <p class="mb-4 text-gray-500 dark:text-gray-300">{{ user.email }}</p>
                    <ul class="flex flex-wrap justify-center gap-2 mb-0">
                      <li
                        class="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-violet-500/20 text-violet-500 hover:bg-violet-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 "><i class="uil uil-facebook-f"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-sky-500/20 text-sky-500 hover:bg-sky-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-info"><i
                            class="uil uil-twitter-alt"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 text-green-500 transition-all duration-300 ease-in-out rounded bg-green-500/20 hover:bg-green-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-success"><i
                            class="uil uil-whatsapp"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 text-red-500 transition-all duration-300 ease-in-out rounded bg-red-500/20 hover:bg-red-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-danger"><i
                            class="uil uil-phone-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-5 pt-0">
                  <h6 class="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">Contacts</h6>
                  <ul class="mb-0">
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Email</label>
                        <div>
                          <p class="mb-0 text-gray-500 text-break dark:text-gray-300">{{ user.email }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Phone Number</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.phone }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Address</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.address }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Website</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.website }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
              <div class="border rounded border-gray-100/50 dark:border-neutral-600 nav-tabs bottom-border-tab">
                <div class="px-6 py-0 border-b border-gray-100/50 dark:border-neutral-600">
                  <ul class="items-center text-sm font-medium text-center text-gray-700 nav md:flex">
                    <li class="active" role="presentation">
                      <button class="inline-block w-full py-4 px-[18px] dark:text-gray-50 active" data-tw-toggle="tab"
                        type="button" data-tw-target="overview-tab">
                        Overview
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="p-6 tab-content">
                  <div class="block w-full tab-pane" id="overview-tab">
                    <div class="mt-2 space-y-8">
                      <div>
                        <h5 class="text-lg font-bold text-gray-900 dark:text-gray-50">About</h5>
                        <p class="mt-4 text-gray-500 dark:text-gray-300">{{ user.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </section>
          </div>
          </div>
      <!-- End grid -->
</template>
                    
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import { useAccountStore } from '~/store/accounts'
import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'

const route = useRoute()
const router = useRouter()
const accountStore = useAccountStore()
const jobStore = useJobStore()
const companyStore = useCompanyStore()

const { user, loading, error } = storeToRefs(accountStore)
const { paginatedJobs } = storeToRefs(jobStore)
const { companies } = storeToRefs(companyStore)

const getUser = async () => {
  await accountStore.getUser()
}

const getPaginatedJobs = async () => {
  await jobStore.fetchJobs()
}

const getCompanies = async () => {
  await companyStore.fetchCompanies()
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Settings', to: '/accounts/settings' }
]

const pageTitle = 'Settings'

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  getUser()
  getPaginatedJobs()
  getCompanies()
})

</script>