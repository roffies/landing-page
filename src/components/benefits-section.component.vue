<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BenefitCard from './benefit-card.component.vue'

const { t } = useI18n()

const b2cBenefits = [
  {
    hook: t('benefits.b2c.maintenance.hook'),
    title: t('benefits.b2c.maintenance.title'),
    description: t('benefits.b2c.maintenance.description'),
    cta: t('benefits.b2c.maintenance.cta'),
    image: '/images/benefit-b2c-1.webp',
    imageAlt: t('benefits.b2c.maintenance.title')
  },
  {
    hook: t('benefits.b2c.emergency.hook'),
    title: t('benefits.b2c.emergency.title'),
    description: t('benefits.b2c.emergency.description'),
    cta: t('benefits.b2c.emergency.cta'),
    image: '/images/benefit-b2c-2.webp',
    imageAlt: t('benefits.b2c.emergency.title')
  },
  {
    hook: t('benefits.b2c.savings.hook'),
    title: t('benefits.b2c.savings.title'),
    description: t('benefits.b2c.savings.description'),
    cta: t('benefits.b2c.savings.cta'),
    image: '/images/benefit-b2c-3.webp',
    imageAlt: t('benefits.b2c.savings.title')
  }
] as const

const b2bBenefits = [
  {
    hook: t('benefits.b2b.visibility.hook'),
    title: t('benefits.b2b.visibility.title'),
    description: t('benefits.b2b.visibility.description'),
    cta: t('benefits.b2b.visibility.cta'),
    image: '/images/benefit-b2b-1.webp',
    imageAlt: t('benefits.b2b.visibility.title')
  },
  {
    hook: t('benefits.b2b.management.hook'),
    title: t('benefits.b2b.management.title'),
    description: t('benefits.b2b.management.description'),
    cta: t('benefits.b2b.management.cta'),
    image: '/images/benefit-b2b-2.webp',
    imageAlt: t('benefits.b2b.management.title')
  },
  {
    hook: t('benefits.b2b.reputation.hook'),
    title: t('benefits.b2b.reputation.title'),
    description: t('benefits.b2b.reputation.description'),
    cta: t('benefits.b2b.reputation.cta'),
    image: '/images/benefit-b2b-3.webp',
    imageAlt: t('benefits.b2b.reputation.title')
  }
] as const
</script>

<template>
  <section 
    id="beneficios" 
    class="benefits-section"
    role="region"
    :aria-label="t('benefits.title')"
  >
    <div class="benefits-container">
       <div class="benefits-content">
         <div class="benefits-list">
           <BenefitCard
             v-for="(benefit, index) in b2cBenefits"
             :key="`b2c-${index}`"
             :hook="benefit.hook"
             :title="benefit.title"
             :description="benefit.description"
             :cta="benefit.cta"
             :image="benefit.image"
             :image-alt="benefit.imageAlt"
             :is-reversed="index % 2 === 1"
           />
         </div>

         <div class="benefits-list">
           <BenefitCard
             v-for="(benefit, index) in b2bBenefits"
             :key="`b2b-${index}`"
             :hook="benefit.hook"
             :title="benefit.title"
             :description="benefit.description"
             :cta="benefit.cta"
             :image="benefit.image"
             :image-alt="benefit.imageAlt"
             :is-reversed="index % 2 === 1"
           />
         </div>
       </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-section {
  padding: 2rem 0;
  background: linear-gradient(
    135deg,
    var(--accent-lightest) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    var(--accent-lightest) 100%
  );
}

.benefits-container {
  max-width: 1280px;
  margin: 0 auto;
}


.benefits-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media screen and (min-width: 600px) {
  .benefits-section {
    padding: 3rem 0;
  }
  
  .benefits-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .benefits-content {
    gap: 1.5rem;
  }
}

@media screen and (min-width: 1136px) {
  .benefits-section {
    padding: 4rem 0;
  }
  
  .benefits-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .benefits-content {
    gap: 2rem;
  }
}
</style>
