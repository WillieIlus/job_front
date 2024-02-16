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
                  <h1 class="text-2xl font-semibold mb-4">Company Form</h1>
                  <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
                    <FormsInput v-model="name" type="text" label="Name*" name="name" id="name" required />
                    <FormsTextarea v-model="description" label="Description" name="description" id="description" required />
                    <div class="flex flex-wrap justify-between -mx-2">
                      <FormsInput v-model="phone" label="Phone" name="phone" id="phone" class="w-full sm:w-1/2 px-2" required />
                      <FormsInput v-model="website" label="Website" name="website" id="website" class="w-full sm:w-1/2 px-2" />
                    </div>
                    <div class="flex flex-wrap justify-between -mx-2">
                      <FormsInput v-model="email" label="Email" name="email" id="email" class="w-full sm:w-1/2 px-2" required />
                      <FormsInput v-model="address" label="Address" name="address" id="address" class="w-full sm:w-1/2 px-2" />
                    </div>
                    <div class="flex flex-wrap justify-between -mx-2">
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="category">Category<span class="text-red-500">*</span></label>
                        <Field as="select" v-model="category"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white"
                          id="category" name="category" required>
                          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                        </Field>
                        <ErrorMessage name="category" class="text-red-500" />
                      </div>
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="location">Location<span class="text-red-500">*</span></label>
                        <Field as="select" v-model="location"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white"
                          id="location" name="location" required>
                          <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}</option>
                        </Field>
                        <ErrorMessage name="location" class="text-red-500" />
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-between -mx-2">
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="logo">Logo</label>
                        <input @change="onLogoChange" type="file" id="logo" name="logo"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white">
                      </div>
                      <div class="w-full sm:w-1/2 px-2">
                        <label class="text-gray-700 dark:text-gray-300" for="cover">Cover</label>
                        <input @change="onCoverChange" type="file" id="cover" name="cover"
                          class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white">
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <button class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting">
                        <span v-if="submitting">Cancel</span>
                        <span v-else>Cancel</span>
                      </button>
                      <button :disabled="submitting" type="submit">
                        <span v-if="submitting">Creating Company …</span>
                        <span v-else>Create Company</span>
                      </button>
                    </div>
                  </Form>
                  <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
                  <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-4">
              <div class="bg-white rounded-lg p-6 shadow-md">
                company script will display here
              </div>
            </div>
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
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useCompanyStore } from '~/store/companies';
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'

const companyStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()

const { loading, error } = storeToRefs(companyStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)
const { user } = storeToRefs(accountStore)

const successMessage = ref('')
const errorMessage = ref('')
const submitting = ref(false)

const router = useRouter()
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
const name = ref('')
const slug = ref('')
const description = ref('')
const phone = ref('')
const website = ref('')
const email = ref('')
const address = ref('')
const category = ref('')
const location = ref('')
const logo = ref(null)
const cover = ref(null)

const onLogoChange = (e) => {
  logo.value = e.target.files[0]
}
const onCoverChange = (e) => {
  cover.value = e.target.files[0]
}

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string(),
  email: yup.string().required(),
  address: yup.string(),
  category: yup.string().required(),
  location: yup.string().required(),
  logo: yup.mixed(),
  cover: yup.mixed()
})



const onSubmit = async () => {
  submitting.value = true;  
  try {
    const slug = name.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const formData = createFormData();
    await companyStore.createCompany(formData);
    successMessage.value = 'Company created successfully'
    // router push to home page
    router.push('/accounts')
    resetFormFields();
    
  } catch (error) {
    console.error('Error submitting form:', error);
    errorMessage.value = error.message;
  } finally {
    submitting.value = false;
  }
};

const createFormData = () => {
  const formData = new FormData();
  
  formData.append('name', name.value);
  formData.append('description', description.value);
  formData.append('phone', phone.value);
  formData.append('website', website.value);
  formData.append('email', email.value);
  formData.append('address', address.value);
  formData.append('category', category.value);
  formData.append('location', location.value);
  
  if (cover.value) {
    formData.append('cover', cover.value);
  }
  
  if (logo.value) {
    formData.append('logo', logo.value);
  }
  
  return formData;
};

const resetFormFields = () => {
  name.value = '';
  description.value = '';
  phone.value = '';
  website.value = '';
  email.value = '';
  address.value = '';
  category.value = '';
  location.value = '';
  logo.value = null;
  cover.value = null;
};


const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Companies', to: '/companies' },
  { label: 'Create Company', to: '/Company/form' }
];

const pageTitle = 'Create Company';

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