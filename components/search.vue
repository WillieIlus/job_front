<template>
  <form @submit.prevent="performSearch">
    <div class="registration-form">
      <div class="grid grid-cols-12">
        <div class="col-span-12 xl:col-span-3">
          <div class="h-full mt-3">
            <i class="uil uil-briefcase-alt"></i>
            <input class="w-full h-full px-4 py-2 dark:text-gray-100 border mb-2" type="text" name="searchTitle"
              v-model="searchTitle" placeholder="Search by title: job..." />
          </div>
        </div><!--end col-->
        <div class="col-span-12 xl:col-span-3">
          <div class="mt-3 filter-search-form mt-md-0 filter-border">
            <i class="uil uil-map-marker"></i>
            <select class="form-select w-full" v-model="selectedCategory" @change="selectCategory($event.target.value)">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
          </div>
        </div><!--end col-->
        <div class="col-span-12 xl:col-span-3">
          <div class="mt-3 filter-search-form mt-lg-0">
            <i class="uil uil-clipboard-notes"></i>
            <select class="form-select w-full" v-model="selectedLocation" @change="selectLocation($event.target.value)">
              <option value="">All Locations</option>
              <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}</option>
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
</template>                
<script setup>
import { onMounted } from 'vue'

import { useRoute } from 'vue-router'
import { Form, Field } from 'vee-validate'

import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const route = useRoute()

const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

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
  await categoryStore.fetchCategories()
  await locationStore.fetchLocations()
})

const props = defineProps({

})

</script>