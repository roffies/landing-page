<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BenefitCard from './benefit-card.component.vue'

const { t } = useI18n()

const b2cBenefits = computed(() => [
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
])

const b2bBenefits = computed(() => [
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
])
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
          <h2 class="benefits-section-title">{{ t('benefits.b2c.sectionTitle') }}</h2>
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
            :is-even="index % 2 === 0"
          />
        </div>

        <div class="benefits-list">
          <h2 class="benefits-section-title">{{ t('benefits.b2b.sectionTitle') }}</h2>
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
            :is-even="index % 2 === 1"
          />
        </div>
       </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-section {
  padding: 2rem 0;
  background: #ffffff;
}

.benefits-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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

.benefits-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-dark);
  text-align: center;
  margin: 0 auto 3rem auto;
  line-height: 1.2;
  max-width: 700px;
}

@media screen and (min-width: 600px) {
  .benefits-section {
    padding: 3rem 0;
  }
  
  .benefits-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .benefits-content {
    gap: 1.5rem;
  }
  
  .benefits-section-title {
    font-size: 3rem;
    margin-bottom: 4rem;
    max-width: 800px;
  }
}

@media screen and (min-width: 1136px) {
  .benefits-section {
    padding: 4rem 0;
  }
  
  .benefits-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 3rem;
  }
  
  .benefits-content {
    gap: 2rem;
  }
  
  .benefits-section-title {
    font-size: 3.5rem;
    margin-bottom: 5rem;
    max-width: 900px;
  }
}
</style>
