<template>
  <section
    class="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('~/assets/images/home/page-title.png')] bg-center bg-cover relative">
    <div class="container mx-auto">
      <div class="grid">
        <div class="col-span-12">
          <div class="text-center text-white">
            <h3 class="mb-4 text-[26px]">{{ pageTitle }}</h3>
            <div class="page-next">
              <nav class="inline-block" aria-label="breadcrumb text-center">
                <ol class="flex flex-wrap justify-center text-sm font-medium uppercase">
                  <li v-for="(item, index) in items" :key="index">
                    <NuxtLink :to="item.to"> {{ item.label }}
                      <i v-if="!isLast(index)" class="bx bxs-chevron-right align-middle px-2.5"></i>
                    </NuxtLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="~/assets/images/about/shape.png" alt="" class="absolute block bg-cover -bottom-0 dark:hidden">
    <img src="~/assets/images/about/shape-dark.png" alt="" class="absolute hidden bg-cover -bottom-0 dark:block">
  </section>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  pageTitle: {
    type: String,
    default: 'Alphajiri Jobs',
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const isLast = computed(() => {
  return (index) => index === props.items.length - 1;
});

watch(route, () => {
  const item = props.items.find(item => item.to === route.path);
  if (item && item.action) {
    item.action();
  }
});
</script>
