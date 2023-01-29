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
        <div class="my-6 space-y-6 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4 sm:space-y-0 sm:my-4 lg:gap-x-3 lg:space-y-0">
          <div class="overflow-hidden bg-gray-800 shadow rounded">
            <div class="px-4 py-5 flex flex-wrap">
              <div class="mr-3">
                <BriefcaseIcon class="bg-gray-900 p-2 rounded h-16 w-16 flex-shrink-0" aria-hidden="true" ></BriefcaseIcon>
              </div>
              <div>
                <p class="mb-1 max-w-2xl text-md">Job Posted</p>
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
        <h2 class="text-2xl font-bold">Recent Job Posts</h2>
        <div class="my-6 space-y-12 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 sm:gap-x-3 sm:space-y-0 lg:gap-x-3 lg:space-y-0">
          <div class="overflow-hidden bg-gray-800 shadow rounded relative">
            <div class="px-4 py-5">
              <div class="mb-1 max-w-2xl">
                <h2 class=" text-1xl font-bold leading-6">Associate Software Engineer, Front-End</h2>
                New Jersey
              </div>
              <div class="absolute right-3 top-2">
                <!-- Job dropdown -->
                <Menu as="div" class="relative mb-0">
                  <div>
                    <MenuButton
                      class="ml-auto flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span class="sr-only">Open job</span>
                      <EllipsisHorizontalIcon class="p-1 rounded h-8 w-8 flex-shrink-0" aria-hidden="true"></EllipsisHorizontalIcon>
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems
                      class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                        item.name
                      }}</a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
                <p class="max-w-2xl text-xs">6 days ago</p>
              </div>
            </div>
            <div class="px-4 py-5 bg-gray-700 text-xs">
              <div class="flex flex-wrap">
                <div class="flex flex-wrap mb-2">
                  <CurrencyDollarIcon class="mr-1 ml-0 h-4 w-4 flex-shrink-0" aria-hidden="true"></CurrencyDollarIcon>
                  90,000 - 11,000 USD
                  <CurrencyDollarIcon class="ml-2 mr-1 h-4 w-4 flex-shrink-0" aria-hidden="true"></CurrencyDollarIcon>
                  Experienced
                </div>
                <div class="flex flex-wrap mb-3">
                  <CurrencyDollarIcon class="mr-1 ml-0 h-4 w-4 flex-shrink-0" aria-hidden="true"></CurrencyDollarIcon>
                  Seasonal
                  <CurrencyDollarIcon class="ml-2 mr-1 h-4 w-4 flex-shrink-0" aria-hidden="true"></CurrencyDollarIcon>
                  15 Applications
                </div>
              </div>
              <div class="max-w-2xl text-justify">The NBA is committed to providing a safe and healthy workplace. To safeguard our employees
                and
                their families, our
                visitors and the broader community from COVID-19, and in consideration of recommendations from health authorities and
                the NBA’s own advisors, any individual working onsite in our New York and New Jersey offices must be fully vaccinated
                against COVID-19, including having received a booster when eligible.</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>

import {
  BriefcaseIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  EllipsisHorizontalIcon,
  CurrencyDollarIcon,
} from '@heroicons/vue/20/solid'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>