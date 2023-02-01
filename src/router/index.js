import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import JobListing from '../views/JobListing.vue'
import AllApplicants from '../views/AllApplicants.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import YourProfile from '../views/YourProfile.vue'
import Setting from '../views/Setting.vue'
import SignOut from '../views/SignOut.vue'
import PostNewJob from '../views/PostNewJob.vue'

const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/job-listing', name: 'Job Listing', component: JobListing },
    { path: '/all-applicants', name: 'All Applicants', component: AllApplicants },
    { path: '/company-profile', name: 'Company Profile', component: CompanyProfile },
    { path: '/your-profile', name: 'Your Profile', component: YourProfile },
    { path: '/setting', name: 'Settings', component: Setting },
    { path: '/sign-out', name: 'Sign Out', component: SignOut },
    { path: '/post-new-job', name: 'Post New Job', component: PostNewJob },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
