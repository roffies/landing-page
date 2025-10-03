import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/landing.page.vue'
import LoginPage from '@/views/log-in.page.vue'
import SignUpPage from '@/views/sign-up.page.vue'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return savedPosition
        return { top: 0 }
    }
})

export default router