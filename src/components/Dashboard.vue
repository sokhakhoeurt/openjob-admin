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
        <h2 class="text-2xl font-bold">Dashboard</h2>
        <div class="my-6 space-y-12 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:gap-x-6 lg:space-y-0">
          <div class="overflow-hidden bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 flex flex-wrap">
              <div class="mr-3">
                <BriefcaseIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></BriefcaseIcon>
              </div>
              <div>
                <p class="mb-1 max-w-2xl text-lg">Total Job Posted</p>
                <h2 class="mb-1 text-2xl font-bold leading-6 text-green-400">100</h2>
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
          <div class="overflow-hidden bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 flex flex-wrap">
              <div class="mr-3">
                <UserCircleIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></UserCircleIcon>
              </div>
              <div>
                <p class="mb-1 max-w-2xl text-lg">Total Applicant Applied</p>
                <h2 class="mb-1 text-2xl font-bold leading-6 text-green-400">100</h2>
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
      </div>
</template>

<script setup>

import {
  BriefcaseIcon,
  UserCircleIcon,
} from '@heroicons/vue/20/solid' 

</script>