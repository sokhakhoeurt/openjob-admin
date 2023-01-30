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
    <div class="mx-auto lg:max-w-none text-white">
        <div class="my-6 space-y-6 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4 sm:space-y-0 sm:my-4 lg:gap-x-4 lg:space-y-0">
          <div class="overflow-hidden bg-gray-800 shadow rounded">
            <div class="px-4 py-5 flex flex-wrap">
              <div class="mr-3">
                <BriefcaseIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></BriefcaseIcon>
              </div>
              <div>
                <p class="mb-1 max-w-2xl text-md">Job Opened</p>
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
                <UserGroupIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></UserGroupIcon>
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
                <DocumentCheckIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></DocumentCheckIcon>
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
        <RecentJobPostCard></RecentJobPostCard>
        <NewApplicant></NewApplicant>
      </div>
</template>

<script setup> 
import RecentJobPostCard from './RecentJobPostCard.vue'
import NewApplicant from './NewApplicant.vue'

import {
  BriefcaseIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  EllipsisHorizontalIcon,
  CurrencyDollarIcon,
} from '@heroicons/vue/20/solid'

</script>