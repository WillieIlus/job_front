<template>
  <div class="container-fluid custom-container">
    <nav
      class="navbar fixed right-0 left-0 top-0 lg:top-[44.5px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
      id="navbar">
      <div class="mx-auto container-fluid">
        <div class="flex flex-wrap items-center justify-between mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/images/logo-dark.png" alt="" class="logo-dark h-[22px] block dark:hidden">
            <img src="~/assets/images/logo-light.png" alt="" class="logo-dark h-[22px] hidden dark:block">
          </NuxtLink>
          <button @click="toggleNavbar" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div class="flex items-center lg:order-2">
            <div>
              <div class="relative dropdown ltr:mr-4 rtl:ml-4">
                <button type="button" class="flex items-center px-4 py-5 dropdown-toggle" id="page-header-user-dropdown"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <img class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                    src="https://plchldr.co/i/200x200?bg=808080&text=USER" alt="Header Avatar">
                  <span class="hidden fw-medium xl:block dark:text-gray-50">User</span>
                </button>
                <ul
                  class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                  id="profile/log" aria-labelledby="navNotifications">

                  <li v-for="item in authNavigation" class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                    <NuxtLink
                      class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                      :to="item.link">{{ item.name }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="navbar-collapse" :class="{ 'hidden': !isNavbarOpen }"
            class="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block">
            <ul class="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row"
              id="navigation-menu">
              <li v-for="item in navItems" class="relative dropdown">
                <button class="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
                  data-bs-toggle="dropdown">
                  <NuxtLink :to="item.link"
                    class="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
                    data-bs-toggle="dropdown">{{ item.name }}</NuxtLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import { useAccountStore } from '~/store/accounts';


const accountStore = useAccountStore()
const { user, isLoggedIn } = storeToRefs(accountStore)
const route = useRoute()

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};


const navItems = [
  { name: 'Home', link: '/', current: route.name === 'home' },
  { name: 'Jobs', link: '/jobs', current: route.name.includes('jobs') },
  { name: 'Categories', link: '/categories', current: route.name.includes('categories') },
]

const authNavigation = computed(() => {
  return isLoggedIn ? userNavigation : loginNavigation;
})

const userNavigation = [
  { name: 'Profile', link: '/accounts/profile', current: route.name.includes('profile') },
  { name: 'Settings', link: '/accounts', current: route.name.includes('settings') },
]

const loginNavigation = [
  { name: 'Login', link: '/accounts/login', current: route.name.includes('login') },
  { name: 'Register', link: '/accounts/signup', current: route.name.includes('register') },
]


onMounted(async () => {
  try {
    await accountStore.getUser();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  } finally {
  }
});

</script>

