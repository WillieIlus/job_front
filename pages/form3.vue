<template>
  <div class="main-content">
    <div class="page-content">
      <navigation-breadcrumbs :breadcrumbs="breadcrumbs" page-title="PageTitle" />
      <section class="py-16">
        <div class="container mx-auto">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h1 class="text-2xl font-semibold mb-4">Country Form</h1>
            <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
              <div class="flex flex-wrap justify-between mx-2">
                <FormsInput v-model="name" type="text" label="Country Name" name="name" id="name" />
                <FormsInput v-model="code" type="text" label="Country Code" name="code" id="code" />
                <div>
                  <label class="block text-sm font-medium text-gray-700">Flag</label>
                  <input type="file" @change="onFileChange" placeholder="Country Flag" />
                </div>
              </div>
              <div class="flex justify-center">
                <button class="mx-7 pr-3 " type="button">
                  Cancel
                </button>
                <button class="pl-3" :disabled="submitting" type="submit">
                  <span v-if="submitting">Creating Country…</span>
                  <span v-else>Create Country</span>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { useCountriesStore } from '~/store/countries';
import { useRouter } from 'vue-router'


const countriesStore = useCountriesStore()
const router = useRouter()

const name = ref('')
const code = ref('')
const flag = ref(null)

const onFileChange = (e) => {
  flag.value = e.target.files[0]
}
const schema = yup.object({
  name: yup.string().required(),
  code: yup.string(),
  flag: yup.mixed()
})

const submitting = ref(false)
const onSubmit = async () => {
  submitting.value = true
  const data = new FormData()
  data.append('name', name.value)
  data.append('code', code.value)
  if (flag.value) {
    data.append('flag', flag.value)
  }
  console.log('that ', data)
  try {
    const response = await countriesStore.createCountry(data)
    if (!response) {
      throw new Error('Server responded with ' + response)
    }
    name.value = ''
    code.value = ''
    flag.value = null
    router.push(`/countries/${response.id}`) // replace with the correct path
  } catch (error) {
    console.error('Error submitting form:', error)
    error('Failed to create country. Please try again.')
  }
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Countries', to: '/locations/countries' },
  { label: 'Create Country', to: '/Country/create' }
];

const pageTitle = 'Create Country';

</script>