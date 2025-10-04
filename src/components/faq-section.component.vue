<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number): void => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    id: 'cost-drivers',
    questionKey: 'faq.costDrivers.question',
    answerKey: 'faq.costDrivers.answer'
  },
  {
    id: 'workshop-verification',
    questionKey: 'faq.workshopVerification.question',
    answerKey: 'faq.workshopVerification.answer'
  },
  {
    id: 'cities-available',
    questionKey: 'faq.citiesAvailable.question',
    answerKey: 'faq.citiesAvailable.answer'
  },
  {
    id: 'emergency-road',
    questionKey: 'faq.emergencyRoad.question',
    answerKey: 'faq.emergencyRoad.answer'
  },
  {
    id: 'maintenance-control',
    questionKey: 'faq.maintenanceControl.question',
    answerKey: 'faq.maintenanceControl.answer'
  },
  {
    id: 'workshop-fees',
    questionKey: 'faq.workshopFees.question',
    answerKey: 'faq.workshopFees.answer'
  }
] as const
</script>

<template>
  <section id="faq" class="faq-section" role="region" aria-label="Preguntas frecuentes">
    <div class="faq-container">
      <h2 class="faq-title">{{ t('faq.title') }}</h2>
      
      <div class="faq-list">
        <div 
          v-for="(faq, index) in faqs" 
          :key="faq.id"
          class="faq-item"
          :class="{ 'faq-item--open': openFaq === index }"
        >
          <button 
            type="button"
            class="faq-question"
            :aria-expanded="openFaq === index"
            :aria-controls="`faq-answer-${faq.id}`"
            @click="toggleFaq(index)"
          >
            <span class="faq-question-text">{{ t(faq.questionKey) }}</span>
            <i 
              class="pi faq-icon"
              :class="openFaq === index ? 'pi-chevron-up' : 'pi-chevron-right'"
              aria-hidden="true"
            ></i>
          </button>
          
          <div 
            :id="`faq-answer-${faq.id}`"
            class="faq-answer"
            :class="{ 'faq-answer--open': openFaq === index }"
            role="region"
            :aria-labelledby="`faq-question-${faq.id}`"
          >
            <p class="faq-answer-text">{{ t(faq.answerKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: var(--spacing-xxxl) var(--spacing-xl);
  background: var(--accent-lightest);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-title {
  font-size: var(--font-size-hero-desktop);
  font-weight: 700;
  color: var(--primary-dark);
  text-align: center;
  margin: 0 0 var(--spacing-xxxl) 0;
  line-height: 1.2;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.faq-item {
  background: var(--accent-lightest);
  border: 1px solid var(--primary-light);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: var(--transitions-normal);
}

.faq-item:hover {
  border-color: var(--primary-medium);
  box-shadow: 0 4px 12px rgba(66, 103, 102, 0.1);
}

.faq-item--open {
  border-color: var(--primary-medium);
  box-shadow: 0 4px 16px rgba(66, 103, 102, 0.15);
}

.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  padding: var(--spacing-lg) var(--spacing-xl);
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transitions-normal);
}

.faq-question:hover {
  background: var(--accent-light);
}

.faq-question-text {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--primary-dark);
  line-height: 1.4;
  flex: 1;
  margin-right: var(--spacing-md);
}

.faq-icon {
  font-size: var(--font-size-md);
  color: var(--primary-medium);
  transition: transform 0.6s ease;
  flex-shrink: 0;
}

.faq-item--open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer--open {
  max-height: 200px;
}

.faq-answer-text {
  padding: var(--spacing-md) var(--spacing-xl) var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-md);
  line-height: 1.6;
  color: var(--primary-medium);
  margin: 0;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .faq-section {
    padding: var(--spacing-xxl) var(--spacing-md);
  }
  
  .faq-title {
    font-size: var(--font-size-hero-tablet);
    margin-bottom: var(--spacing-xxl);
  }
  
  .faq-question {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .faq-question-text {
    font-size: var(--font-size-md);
  }
  
  .faq-answer-text {
    padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-sm);
    text-align: left;
  }
}

@media screen and (max-width: 480px) {
  .faq-title {
    font-size: var(--font-size-hero-mobile);
  }
  
  .faq-question {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .faq-answer-text {
    padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-md);
    text-align: left;
  }
}
</style>
