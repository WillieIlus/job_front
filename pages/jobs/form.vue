<template>
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
      <section class="py-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
            <div class="col-span-12 lg:col-span-8">

              <div v-if="loading" class="flex justify-center items-center">
                <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
              </div>
              <div v-else-if="error" class="flex justify-center">
                <div class="text-red-500">Error: {{ error }}</div>
              </div>
              <div v-else>
                <div class="bg-white rounded-lg p-6 shadow-md">
                  <h1 class="text-2xl font-semibold mb-4"> Job Form </h1>
                  <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
                    <div class="flex flex-wrap justify-between -mx-2">
                      <div class="w-full sm:w-1/2s px-2">
                        <FormsInput v-model="title" name="title" label="Title" />
                        <label class="text-gray-700 dark:text-gray-300" for="company">Company<span
                            class="text-red-500">*</span></label>
                        <Field as="select" v-model="company"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white"
                          id="company" name="company" required>
                          <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name
                          }}</option>
                        </Field>
                        <ErrorMessage name="company" class="text-red-500" />
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-between -mx-2">
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="category">Category<span
                            class="text-red-500">*</span></label>
                        <Field as="select" v-model="category"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white"
                          id="category" name="category" required>
                          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name
                          }}</option>
                        </Field>
                        <ErrorMessage name="category" class="text-red-500" />
                      </div>
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="location">Location<span
                            class="text-red-500">*</span></label>
                        <Field as="select" v-model="location"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white"
                          id="location" name="location" required>
                          <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name
                          }}</option>
                        </Field>
                        <ErrorMessage name="location" class="text-red-500" />
                      </div>
                    </div>
                    <FormsTextarea v-model="description" name="description" label="Description" />
                    <div class="flex flex-wrap justify-between -mx-2">
                      <div class="w-full sm:w-1/2 px-2">
                        <FormsInput v-model="salary" name="salary" label="Salary" />
                      </div>
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="image">Image</label>
                        <input type="file" @change="onFileChange" class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" />
                    </div>
                    </div>
                    <div class="flex justify-end">
                      <button class="pl-3" :disabled="submitting" type="submit">
                  <span v-if="submitting">Creating Job…</span>
                  <span v-else>Create Job</span>
                </button>
                    </div>
                  </Form>
                  <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
                  <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form, Field, ErrorMessage, useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'

const successMessage = ref('')
const errorMessage = ref('')

const router = useRouter()

const jobStore = useJobStore()
const companyStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()

const { loading, error } = storeToRefs(jobStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)
const { companies } = storeToRefs(companyStore)
const { user } = storeToRefs(accountStore)

const fetchCompanies = async () => {
  await companyStore.fetchCompanies()
}
const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}
const fetchLocations = async () => {
  await locationStore.fetchLocations()
}
const getUser = async () => {
  await accountStore.getUser()
}
const title = ref('')
const company = ref('')
const location = ref('')
const category = ref('')
const description = ref('')
const salary = ref('')
const image = ref(null)

const onFileChange = (e) => {
  image.value = e.target.files[0]
}

const schema = yup.object({
  title: yup.string().required(),
  company: yup.string().required(),
  location: yup.string().required(),
  category: yup.string().required(),
  description: yup.string().required(),
  salary: yup.number(),
})

const submitting = ref(false)
const onSubmit = async () => {
  submitting.value = true
  const data = new FormData()
  data.append('title', title.value)
  data.append('company', company.value)
  data.append('location', location.value)
  data.append('category', category.value)
  data.append('description', description.value)
  data.append('salary', salary.value)
  console.log('the data is', data.values )
  if (image.value) {
    data.append('image', image.value)
  }
  try {
    const response = await jobStore.createJob(data)
    console.log('response', response)
    if (!response) {
      throw new Error('Server responded with ' + response)
    }
    successMessage.value = 'Job created successfully'
    createFormData()
    console.log('formdata ', data)
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
    // redirect to the jobs page
    router.push('/accounts')
  } catch (error) {
    console.error('Error submitting form:', error)
    errorMessage.value = 'Failed to create job. Please try again.'
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  }
  submitting.value = false

}

const createFormData = () => {
  title.value = ''
  user.value = ''
  company.value = ''
  location.value = ''
  category.value = ''
  description.value = ''
  salary.value = ''
}

const resetFormFields = () => {
  title.value = ''
  user.value = ''
  company.value = ''
  location.value = ''
  category.value = ''
  description.value = ''
  salary.value = ''
}

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Jobs',
    to: '/jobs',
  },
  {
    label: 'Create Job',
    to: '/jobs/form',
  },
]

const pageTitle = 'Create Job'

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  fetchCompanies()
  fetchCategories()
  fetchLocations()
  getUser()
})

</script>
