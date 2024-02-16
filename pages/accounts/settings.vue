<template>
  <div class="main-content">
    <div class="page-content">
      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-4">
              <div class="border rounded border-gray-100/50 dark:border-neutral-600">
                <div class="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <div class="text-center">
                    <img class="w-20 h-20 p-1 mx-auto border-2 rounded-full border-gray-200/20" :src="user.avatar"
                      alt="avatar">
                    <h6 class="mt-4 mb-0 text-lg text-gray-900 dark:text-gray-50">{{ user.first_name }} {{ user.last_name
                    }}</h6>
                    <p class="mb-4 text-gray-500 dark:text-gray-300">{{ user.email }}</p>
                    <ul class="flex flex-wrap justify-center gap-2 mb-0">
                      <li
                        class="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-violet-500/20 text-violet-500 hover:bg-violet-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 "><i class="uil uil-facebook-f"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-sky-500/20 text-sky-500 hover:bg-sky-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-info"><i
                            class="uil uil-twitter-alt"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 text-green-500 transition-all duration-300 ease-in-out rounded bg-green-500/20 hover:bg-green-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-success"><i
                            class="uil uil-whatsapp"></i></a>
                      </li>
                      <li
                        class="w-10 h-10 text-lg leading-10 text-red-500 transition-all duration-300 ease-in-out rounded bg-red-500/20 hover:bg-red-500 hover:text-white">
                        <a href="javascript:void(0)" class="social-link rounded-3 btn-soft-danger"><i
                            class="uil uil-phone-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-5 pt-0">
                  <h6 class="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">Contacts</h6>
                  <ul class="mb-0">
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Email</label>
                        <div>
                          <p class="mb-0 text-gray-500 text-break dark:text-gray-300">{{ user.email }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Phone Number</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.phone }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Address</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.address }}</p>
                        </div>
                      </div>
                    </li>
                    <li class="pb-3">
                      <div class="flex">
                        <label class="w-32 font-medium text-gray-900 dark:text-gray-50">Website</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ user.website }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
              <div class="border rounded border-gray-100/50 dark:border-neutral-600">
                <div class="p-5 border
                  border-b border-gray-100/50 dark:border-neutral-600">
                  <h6 class="mb-0 font-semibold text-gray-900 text-17 dark:text-gray-50">Profile Settings</h6>
                </div>
                <div class="p-5 pt-0">
                  <Form :validationSchema="schema" @submit="onSubmit">
                    <div class="grid grid-cols-12 gap-5">
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="email" type="email" v-model="email" label="Email" placeholder="Email" />
                        <ErrorMessage name="email" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="first_name" type="text" v-model="first_name" label="First Name"
                          placeholder="First Name" />
                        <ErrorMessage name="first_name" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="last_name" type="text" v-model="last_name" label="Last Name"
                          placeholder="Last Name" />
                        <ErrorMessage name="last_name" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="middle_name" type="text" v-model="middle_name" label="Middle Name"
                          placeholder="Middle Name" />
                        <ErrorMessage name="middle_name" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="avatar" type="file" v-model="avatar" label="Avatar" @change="onAvatarChange" />
                        <ErrorMessage name="avatar" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <div class="mb-3">
                          <label for="choices-single-location"
                            class="text-sm text-gray-900 dark:text-gray-50">gender</label>
                            <!-- generate label for genderChoices -->
                          <Field as="select" name="Gender" v-model="gender">
                            <option v-for="choice in genderChoices" :value="choice.value">{{ choice.label }}</option>
                          </Field>
                          <ErrorMessage name="gender"/>
                        </div>
                      </div>                          
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="phone" type="text" v-model="phone" label="Phone" placeholder="Phone" />
                        <ErrorMessage name="phone" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="address" type="text" v-model="address" label="Address" placeholder="Address" />
                        <ErrorMessage name="address" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="bio" type="text" v-model="bio" label="Bio" placeholder="Bio" />
                        <ErrorMessage name="bio" />
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field name="website" type="text" v-model="website" label="Website" placeholder="Website" />
                        <ErrorMessage name="website" />
                      </div>
                      <div class="col-span-12">
                        <div class="flex items
                          -center justify-between">
                          <button type="submit" class="btn btn-primary" :disabled="submitting">
                            <span v-if="submitting" class="spinner-border spinner-border-sm"></span>
                            <span v-else>Update</span>
                          </button>
                          <button type="reset" class="btn btn-danger" @click="onReset">Reset</button>

                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End grid -->
    </div>
  </div>
</template>                    
<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useAccountStore } from '~/store/accounts'

const route = useRoute()
const router = useRouter()
const accountStore = useAccountStore()

const { user, loading, error } = accountStore

const successMessage = ref('')
const errorMessage = ref('')
const submitting = ref(false)

const getUser = async () => {
  await accountStore.getUser()
}

const updateUser = async () => {
  await accountStore.updateUser()
}

const email = ref('')
const first_name = ref('')
const last_name = ref('')
const middle_name = ref('')
const avatar = ref('')
const gender = ref('')
const phone = ref('')
const address = ref('')
const bio = ref('')
const website = ref('')

const genderChoices = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'O', label: 'Other' }
]

const onAvatarChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    avatar.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const schema = yup.object({
  email: yup.string().email().required(),
  first_name: yup.string().required(),
  last_name: yup.string(),
  middle_name: yup.string(),
  avatar: yup.mixed(),
  gender: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  bio: yup.string(),
  website: yup.string(),
})

const onSubmit = async () => {
  submitting.value = true
  try {
    const data = {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      middle_name: middle_name.value,
      avatar: avatar.value,
      gender: gender.value,
      phone: phone.value,
      address: address.value,
      bio: bio.value,
      website: website.value,
    }
    await accountStore.updateUser(data)
    successMessage.value = 'Profile updated successfully'
    //reset form
    email.value = ''
    first_name.value = ''
    last_name.value = ''
    middle_name.value = ''
    avatar.value = ''
    gender.value = ''
    phone.value = ''
    address.value = ''
    bio.value = ''
    website.value = ''
  } catch (error) {
    errorMessage.value = error.message
    console.log(error)
  } finally {
    submitting.value = false
  }
}

const onReset = () => {
  email.value = ''
  first_name.value = ''
  last_name.value = ''
  middle_name.value = ''
  avatar.value = ''
  gender.value = ''
  phone.value = ''
  address.value = ''
  bio.value = ''
  website.value = ''
}

const onClear = () => {
  successMessage.value = ''
  errorMessage.value = ''
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Settings', to: '/accounts/settings' }
]

const pageTitle = 'Settings'

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  getUser()
})


</script>