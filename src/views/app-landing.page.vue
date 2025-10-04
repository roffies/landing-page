<script setup lang="ts">
import Navbar from "@/components/navbar-section.component.vue";
import Footer from "@/components/footer-section.component.vue"
import HeroSection from "@/components/hero-section.component.vue"
import HowItWorksSection from "@/components/how-it-works-section.component.vue"
import BenefitsSection from "@/components/benefits-section.component.vue"
import TeamSection from "@/components/team-section.component.vue"
import FaqSection from "@/components/faq-section.component.vue"
</script>

<template>
  <Navbar />
  <HeroSection />
  <HowItWorksSection />
  <BenefitsSection />
  <TeamSection />
  <FaqSection />
  <Footer />
</template>

<style scoped>
/* No styles needed for this simplified landing page */
</style>