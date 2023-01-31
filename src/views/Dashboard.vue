<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="flex flex-col h-screen justify-between min-h-ful">
    <div>
      <MainNav :user=user />
      <MainHeader :user=user />
    </div>

    <main class="mb-auto px-4 sm:px-4">
      <div class="py-4 sm:px-0 lg:px-5">
        <!-- Replace with your content -->
        <div class="lg:max-w-none text-white">
          <h2 class="text-2xl font-bold">Dashboard</h2>
          <div
            class="my-6 space-y-6 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4 sm:space-y-0 sm:my-4 lg:gap-x-4 lg:space-y-0">
            <div class="overflow-hidden bg-gray-800 shadow rounded">
              <div class="px-4 py-5 flex flex-wrap">
                <div class="mr-3">
                  <BriefcaseIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true">
                  </BriefcaseIcon>
                </div>
                <div>
                  <p class="mb-1 max-w-2xl text-md">Jobs Opened</p>
                  <h2 class="mb-1 text-2xl font-bold leading-6">100</h2>
                </div>
              </div>
              <div class=" bg-gray-900">
                <a href="#" class="my-4 py-4 font-large font-bold w-full text-white hover:text-gray-400">
                  <div class="px-4 py-4 sm:px-6">
                    View All
                  </div>
                </a>
              </div>
            </div>
            <div class="overflow-hidden bg-gray-800 shadow rounded">
              <div class="px-4 py-5 flex flex-wrap">
                <div class="mr-3">
                  <UserGroupIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true">
                  </UserGroupIcon>
                </div>
                <div>
                  <p class="mb-1 max-w-2xl text-md">Applicants</p>
                  <h2 class="mb-1 text-2xl font-bold leading-6">199</h2>
                </div>
              </div>
              <div class="bg-gray-900">
                <a href="#" class="my-4 py-4 font-large font-bold w-full text-white hover:text-gray-400">
                  <div class="px-4 py-4 sm:px-6">
                    View All
                  </div>
                </a>
              </div>
            </div>
            <div class="overflow-hidden bg-gray-800 shadow rounded">
              <div class="px-4 py-5 flex flex-wrap">
                <div class="mr-3">
                  <DocumentCheckIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true">
                  </DocumentCheckIcon>
                </div>
                <div>
                  <p class="mb-1 max-w-2xl text-md">Jobs Closed</p>
                  <h2 class="mb-1 text-2xl font-bold leading-6">100</h2>
                </div>
              </div>
              <div class="bg-gray-900">
                <a href="#" class="my-4 py-4 font-large font-bold w-full text-white hover:text-gray-400">
                  <div class="px-4 py-4 sm:px-6">
                    View All
                  </div>
                </a>
              </div>
            </div>
          </div>
          <NewApplicant></NewApplicant>
          <RecentJobPostCard></RecentJobPostCard>
        </div>
        <!-- /End replace -->
      </div>
    </main>

    <Footer></Footer>
  </div>


</template>

<script setup>
import RecentJobPostCard from '../components/RecentJobPostCard.vue'
import NewApplicant from '../components/NewApplicant.vue'

import {
  BriefcaseIcon,
  UserGroupIcon,
  DocumentCheckIcon,
} from '@heroicons/vue/20/solid'

import MainNav from '../components/MainNav.vue';
import MainHeader from '../components/MainHeader.vue';
import Footer from '../components/Footer.vue';
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  company: 'apple ince.',
  location: 'San Francisco, California, USA',
  accountRegisteredDate: 'January 9, 2020'
}

</script>