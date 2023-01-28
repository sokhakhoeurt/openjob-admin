<template>
  <header class="text-white bg-gray-700">
      <div class="mx-auto max-w-7xl px-8 py-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-stretch lg:justify-between">
          <div class="min-w-0 flex-1">
            <div class="flex items-center">
              <div class="mb-2"> 
                <img :data-src="user.imageUrl" alt="" class="h-16 w-16 mr-4 flex-shrink-0 rounded-full" />
              </div>
              <h1 class="mb-1 p-2 text-4xl font-bold break-words leading-none">Hello {{ user.name }}!</h1>
            </div>
            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-4">
              <div class="mt-2 flex items-center text-sm">
                <BriefcaseIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {{user.company}}
              </div>
              <div class="mt-2 flex items-center text-sm">
                <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {{user.location}}
              </div>
              <div class="mt-2 flex items-center text-sm">
                <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {{user.accountRegisteredDate}}
              </div>
              <div class="mt-2 flex items-center text-sm">
                <EnvelopeIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {{user.email}}
              </div>
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
  ChevronDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/vue/20/solid' 

defineProps({
    user: Object,
})

</script>

<style>

</style>