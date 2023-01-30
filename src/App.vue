<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="flex flex-col h-screen justify-between min-h-full">
    
    <div>
      <MainNav :user=user />
      <MainHeader :user=user />
    </div>

    <main class="mb-auto px-4 sm:px-4">
      <div class="py-4 sm:px-0 lg:px-5">
        <!-- Replace with your content -->
            <Dashboard/>
        <!-- /End replace -->
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Dashboard from './components/Dashboard.vue';
import MainNav from './components/MainNav.vue';
import MainHeader from './components/MainHeader.vue';
import Footer from './components/Footer.vue';
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

<style scoped>

</style>
