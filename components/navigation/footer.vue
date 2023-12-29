<template>
  <footer class="footer ">
    <section class="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
      <div class="container mx-auto text-center">
        <div class="flex justify-center items-center">
          <p class="mb-0 text-white/50">
            ©
            <span class="text-bold text-white">{{ year }}</span>
            Alfajiri Jobs
          </p>
        </div>
      </div>
    </section>
  </footer>
</template>
<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>
  