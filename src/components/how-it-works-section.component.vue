<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProcessStep from './process-step.component.vue'

const { t } = useI18n()

const processSteps = [
  {
    stepNumber: 1,
    image: '/images/how-it-works-section-register.webp',
    titleKey: 'functions.register.title',
    descriptionKey: 'functions.register.description',
    stepId: 'register'
  },
  {
    stepNumber: 2,
    image: '/images/how-it-works-section-get-quotes.webp',
    titleKey: 'functions.quote.title',
    descriptionKey: 'functions.quote.description',
    stepId: 'quote'
  },
  {
    stepNumber: 3,
    image: '/images/how-it-works-section-emergency.webp',
    titleKey: 'functions.protect.title',
    descriptionKey: 'functions.protect.description',
    stepId: 'protect'
  },
  {
    stepNumber: 4,
    image: '/images/how-it-works-section-notification.webp',
    titleKey: 'functions.inform.title',
    descriptionKey: 'functions.inform.description',
    stepId: 'inform'
  }
] as const
</script>

<template>
  <section 
    id="funciones" 
    class="section" 
    role="region" 
    :aria-label="t('functions.title')"
  >
    <div class="text-center mb-8">
      <h2 class="section-title">{{ t('functions.title') }}</h2>
      <p class="section-subtitle">{{ t('functions.subtitle') }}</p>
    </div>
    
    <div 
      class="steps-container" 
      role="list" 
      :aria-label="t('functions.subtitle')"
    >
      <ProcessStep
        v-for="step in processSteps"
        :key="step.stepId"
        :step-number="step.stepNumber"
        :image="step.image"
        :title-key="step.titleKey"
        :description-key="step.descriptionKey"
        :step-id="step.stepId"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  margin: 0;
  padding: 40px 20px;
  background: var(--accent-light) !important;
  border-bottom: 1px solid var(--accent-light);
  box-sizing: border-box;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 auto 0.5rem auto;
  letter-spacing: -0.025em;
  max-width: 700px;
  text-align: center;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--primary-medium);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.5rem 0;
}


@media screen and (min-width: 600px) {
  .section-title {
    font-size: 3rem;
    max-width: 800px;
  }
}

@media screen and (min-width: 1136px) {
  .section-title {
    font-size: 3.5rem;
    max-width: 900px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 20px 10px;
  }
  
  .section-title {
    font-size: 1.8rem;
    max-width: 600px;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
  
  .steps-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>