<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface StepData {
  stepNumber: number
  icon: string
  titleKey: string
  descriptionKey: string
}

const steps: StepData[] = [
  {
    stepNumber: 1,
    icon: 'pi pi-cog',
    titleKey: 'functions.register.title',
    descriptionKey: 'functions.register.description'
  },
  {
    stepNumber: 2,
    icon: 'pi pi-bolt',
    titleKey: 'functions.quote.title',
    descriptionKey: 'functions.quote.description'
  },
  {
    stepNumber: 3,
    icon: 'pi pi-shield',
    titleKey: 'functions.protect.title',
    descriptionKey: 'functions.protect.description'
  },
  {
    stepNumber: 4,
    icon: 'pi pi-users',
    titleKey: 'functions.inform.title',
    descriptionKey: 'functions.inform.description'
  }
]
</script>

<template>
  <section id="funciones" class="section" role="region" aria-label="Cómo funciona SmartCare">
    <div class="text-center mb-6">
      <h2>{{ t('functions.title') }}</h2>
      <p>{{ t('functions.subtitle') }}</p>
    </div>
    
    <!-- Step Cards -->
    <div class="grid">
      <div 
        v-for="step in steps" 
        :key="step.stepNumber"
        class="col-12 md:col-6 lg:col-3"
      >
        <div class="feature-card">
          <div class="badge">{{ step.stepNumber }}</div>
          <i :class="step.icon" aria-hidden="true"></i>
          <h3>{{ t(step.titleKey) }}</h3>
          <p>{{ t(step.descriptionKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  margin: 0;
  padding: 80px 40px;
  background: #f1f5f9;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}

.feature-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
}

.feature-card i {
  font-size: 2rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.feature-card p {
  color: #555;
  font-size: 0.95rem;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3b82f6;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>