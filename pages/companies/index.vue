<template>
  <div>
    <Head>
      <title> Alfajirijobs | Companies </title>
      <meta name="description" content="Popular companies in Kenya" />
      <meta name="twitter:site" content="@alfajirijobs" />
      <meta name="twitter:creator" content="@alfajirijobs" />
      <meta name="twitter:title" content="Companies" />
      <meta name="twitter:description" content="Popular companies in Kenya" />
      <meta name="twitter:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta name="twitter:image:alt" content="Companies" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Companies" />
      <meta property="og:description" content="Popular companies in Kenya" />
      <meta property="og:url" content="https://alfajirijobs.com" />
      <meta property="og:site_name" content="Companies" />
      <meta property="og:image" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta property="og:image:secure_url" content="https://alfajirijobs.com/assets/images/featured-job/img-01.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Companies" />
    </Head>
  </div>
  <div class="main-content">
    <div class="page-content">

      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 

      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid items-center grid-cols-12 mb-4">
            <div class="col-span-12 lg:col-span-8">
              <div class="mb-3 mb-lg-0">
                <h6 class="text-gray-900 text-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
              </div>
            </div><!--end col-->

            
            <div class="col-span-12 lg:col-span-4">
              <div class="candidate-list-widgets">
                <div class="grid items-center grid-cols-12 gap-3">
                  <div class="col-span-12 lg:col-span-6">
                    <div class="selection-widget">
                      <select class="form-select" data-trigger name="choices-single-filter-orderby"
                        id="choices-single-filter-orderby" aria-label="Default select example">
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-12 lg:col-span-6">
                    <div class="selection-widget">
                      <select class="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page"
                        aria-label="Default select example">
                        <option value="df">All</option>
                        <option value="ne">8 per Page</option>
                        <option value="ne">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div><!--end candidate-list-widgets-->
            </div><!--end col-->
          </div>
          <div class="mt-8">
            <div class="grid grid-cols-12 gap-8">
              <FilterCompanies :companies="companies" />
            </div>
          </div>
          <FilterPagination />
        </div>
      </section>
      <!-- End grid -->
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useAccountStore } from '~/store/accounts'
import { useLocationStore } from '~/store/locations'

const companyStore = useCompanyStore()
const categoriesStore = useCategoryStore()
const accountStore = useAccountStore()
const locationStore = useLocationStore()

const { companies, loading, error } = storeToRefs(companyStore)
const { categories } = storeToRefs(categoriesStore)

const fetchCompanies = async () => {
  await companyStore.fetchCompanies()
}

const fetchCategories = async () => {
  await categoriesStore.fetchCategories()
}

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Companies',
    to: '/companies',
  },
]

const pageTitle = 'Companies'

onMounted(() => {
  fetchCompanies()
  fetchCategories()
})

</script>