<template>
  <header class="bg-gray-700 text-white">
    <div class="px-8 py-4 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-stretch lg:justify-between">
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between min-w-full">
            <div class="mb-2 mr-2">
              <img :src="user.imageUrl" alt="" class="h-16 w-16 mr-2 flex-shrink-0 rounded-full" />
            </div>
            <h3 class="mr-auto text-3xl font-bold break-words leading-none">Hello {{ user.name }}!</h3>
            <div class="pt-4 hidden sm:block">
              <router-link :to="'/post-new-job'"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Post New Job
              </router-link>
            </div>
          </div>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-4">
            <div class="mt-2 flex items-center text-sm">
              <BriefcaseIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ user.company }}
            </div>
            <div class="mt-2 flex items-center text-sm">
              <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ user.location }}
            </div>
            <div class="mt-2 flex items-center text-sm">
              <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ user.accountRegisteredDate }}
            </div>
            <div class="mt-2 flex items-center text-sm">
              <EnvelopeIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ user.email }}
            </div>
          </div>
          <div class="pt-4 block sm:hidden">
            <router-link :to="'/post-new-job'"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Post New Job
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/vue/20/solid'

defineProps({
  user: Object,
})

</script>

<style>

</style>