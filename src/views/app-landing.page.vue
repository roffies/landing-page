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
  background: linear-gradient(180deg, 
    var(--accent-lightest) 0%, 
    var(--accent-lighter) 25%, 
    var(--accent-light) 50%, 
    var(--accent-lighter) 75%, 
    var(--accent-lightest) 100%
  );
  position: relative;
  overflow: hidden;
}

main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
  z-index: 0;
}
main > * {
  position: relative;
  z-index: 1;
}

</style>