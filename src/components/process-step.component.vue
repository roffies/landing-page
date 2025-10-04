<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  stepNumber: number
  image: string
  titleKey: string
  descriptionKey: string
  stepId: string
}

defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <article 
    class="step-item"
    role="listitem"
    :aria-labelledby="'step-title-' + stepId"
    :aria-describedby="'step-description-' + stepId"
  >
    <div class="step-image-container">
      <img 
        :src="image" 
        :alt="t(titleKey + '.image-alt')"
        class="step-image"
        loading="lazy"
      />
    </div>
    <div 
      class="step-number" 
      :aria-label="t('functions.step-aria-label', { number: stepNumber })"
    >
      {{ String(stepNumber).padStart(2, '0') }}
    </div>
    <h3 
      :id="'step-title-' + stepId" 
      class="step-title"
    >
      {{ t(titleKey) }}
    </h3>
    <p 
      :id="'step-description-' + stepId" 
      class="step-description"
    >
      {{ t(descriptionKey) }}
    </p>
  </article>
</template>

<style scoped>
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.step-image-container {
  width: 180px;
  height: 180px;
  margin-bottom: 0.75rem;
  position: relative;
}

.step-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.step-number {
  width: 35px;
  height: 35px;
  background: var(--primary-dark);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.step-description {
  font-size: 0.8rem;
  color: var(--primary-medium);
  line-height: 1.4;
  max-width: 180px;
}

@media (max-width: 480px) {
  .step-image-container {
    width: 130px;
    height: 130px;
  }
  
  .step-number {
    width: 30px;
    height: 30px;
    font-size: 0.7rem;
  }
}
</style>
