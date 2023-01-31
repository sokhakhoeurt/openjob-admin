import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import './style.css'

import App from './App.vue'

import Dashboard from './views/Dashboard.vue'

import JobListing from './views/JobListing.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Dashboard', component: Dashboard },
        { path: '/job-listing', name: 'Job Listing', component: JobListing },
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
