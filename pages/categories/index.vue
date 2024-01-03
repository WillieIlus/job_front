<template>
  <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
  <div class="main-content">
    <div class="page-content">
      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-6 lg:col-start-4">
              <div class="mb-5 text-center">
                <h4 class="mt-2 text-gray-900 text-22 dark:text-white">Explore Jobs by Categories</h4>
                <p class="mt-2 text-gray-500 dark:text-gray-300">Dive into diversity: Your dream job awaits in every category.</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-y-5 md:gap-8">
            <div v-for="(category, index) in paginatedCategories" :key="category.id" class="col-span-12 md:col-span-6 xl:col-span-4">
              <ul class="mt-4 rounded bg-gray-50 dark:bg-neutral-700">
                <li class="px-4 py-2 bg-white rounded dark:bg-neutral-600">
                  <NuxtLink :to="`/categories/${category.slug}`" class="text-gray-900 dark:text-white"> {{
                    category.name }} <span
                      class="px-2 py-1 rounded bg-sky-500/20 text-11 text-sky-500 ltr:float-right rtl:float-left">{{
                        category.job_count }}</span></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- End grid --> 
      <!-- start cta -->
      <section class="pb-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 lg:col-start-3">
              <div class="text-center">
                <div class="flex justify-center gap-3 mt-8">
                  <button
                    class="btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20"
                    @click="categoryStore.setCurrentPage(categoryStore.currentPage - 1)"
                    :disabled="categoryStore.currentPage === 1">Previous</button>
                  <span>{{ categoryStore.currentPage }} / {{ categoryStore.totalPages }}</span>
                  <button
                    class="btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20"
                    @click="categoryStore.setCurrentPage(categoryStore.currentPage + 1)"
                    :disabled="categoryStore.currentPage === categoryStore.totalPages">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end cta -->
      <!-- Pagination controls -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/store/categories';
import { useRouter } from 'vue-router';

const categoryStore = useCategoryStore();
const { categories, loading, error, paginatedCategories, totalPages, currentPage, setCurrentPage } = storeToRefs(categoryStore);

const router = useRouter();

onMounted(() => {
  categoryStore.fetchCategories();
});

const breadcrumbs = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Categories',
    to: '/categories',
  },

]);

const pageTitle = ref('Categories');

</script>