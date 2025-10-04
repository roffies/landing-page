<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Navbar from "@/components/navbar-section.component.vue";
import Footer from "@/components/footer-section.component.vue"
import HeroSection from "@/components/hero-section.component.vue"
import HowItWorksSection from "@/components/how-it-works-section.component.vue"
import BenefitsSection from "@/components/benefits-section.component.vue"
import TeamSection from "@/components/team-section.component.vue"
import FaqSection from "@/components/faq-section.component.vue"

const { t } = useI18n()
</script>

<template>
  <Navbar />
  <main role="main" :aria-label="t('app.main-aria-label')">
    <HeroSection />
    <HowItWorksSection />
    <BenefitsSection />
    <TeamSection />
    <FaqSection />
  </main>
  <Footer />
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>