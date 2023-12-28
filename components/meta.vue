<!-- @/components/Meta.vue -->
<script setup>
import { useHead } from '@nuxtjs/composition-api';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

useHead({
  title: props.title,
  titleTemplate: '%s - Alfajir Jobs',
  meta: [
    { name: 'description', content: `${props.description} - Browse jobs in Kenya` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: 'https://alfajirjobs.com/image.jpg' },
    { name: 'twitter:site', content: '@alfajirjobs' }
  ],
});

</script>
