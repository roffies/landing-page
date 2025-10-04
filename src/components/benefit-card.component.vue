<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  hook: string
  title: string
  description: string
  cta: string
  image: string
  imageAlt: string
  isReversed?: boolean
  isEven?: boolean
}

defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div 
    class="benefit-card grid" 
    :class="{ 
      'benefit-card--reversed': isReversed,
      'benefit-card--even': isEven
    }"
    role="article"
    :aria-label="t('benefits.card-aria-label', { title })"
  >
    <div class="benefit-content">
      <div class="benefit-text">
        <p class="benefit-hook">{{ hook }}</p>
        <h3 
          :id="'benefit-title-' + title.toLowerCase().replace(/\s+/g, '-')"
          class="benefit-title"
        >
          {{ title }}
        </h3>
        <p class="benefit-description">{{ description }}</p>
        <button 
          type="button"
          class="benefit-cta"
          :aria-label="t('benefits.cta-aria-label', { title })"
        >
          {{ cta }}
        </button>
      </div>
    </div>
    
    <div class="benefit-image">
      <img 
        :src="image" 
        :alt="imageAlt"
        class="benefit-img"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.benefit-card {
  display: -ms-grid;
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 24px;
  -ms-grid-columns: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  justify-items: inherit;
  padding: var(--spacing-xxl) var(--spacing-lg);
  border-radius: var(--border-radius-md);
}

.benefit-card--reversed .benefit-content {
  order: 1;
}

.benefit-card--reversed .benefit-image {
  order: 2;
}

@media screen and (max-width: 479px) {
  .benefit-card {
    padding: var(--spacing-xxl) var(--spacing-lg);
    grid-column-gap: 8px;
    grid-row-gap: 20px;
  }
}

.benefit-content {
  -ms-grid-column: 1;
  -ms-grid-column-span: -2;
  grid-column: 1 / -1;
  order: 1;
  width: 100%;
  -ms-grid-row-align: center;
  align-self: center;
  display: -ms-grid;
  display: grid;
}

.benefit-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  text-align: left;
}

.benefit-hook {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-medium);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.benefit-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0;
  line-height: 1.2;
}

.benefit-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.benefit-cta {
  background: var(--primary-medium);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}


.benefit-image {
  -ms-grid-row-align: center;
  align-self: center;
  display: -ms-grid;
  display: grid;
  -ms-grid-column: 1;
  -ms-grid-column-span: -2;
  grid-column: 1 / -1;
  order: 2;
  height: 100%;
  cursor: default;
}

.benefit-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--border-radius-md);
}


@media screen and (min-width: 600px) {
  .benefit-card {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    -ms-grid-columns: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);
    padding: 40px 20px;
  }
  
  .benefit-title {
    font-size: 1.8rem;
  }
  
  .benefit-content {
    -ms-grid-column: 5;
    -ms-grid-column-span: 4;
    grid-column: 5 / span 4;
    order: 2;
  }
  
  .benefit-image {
    display: -ms-grid;
    display: grid;
    -ms-grid-column: 1;
    -ms-grid-column-span: 4;
    grid-column: 1 / span 4;
    order: 1;
  }
  
  .benefit-card--reversed .benefit-content {
    -ms-grid-column: 1;
    -ms-grid-column-span: 4;
    grid-column: 1 / span 4;
    order: 1;
  }
  
  .benefit-card--reversed .benefit-image {
    -ms-grid-column: 5;
    -ms-grid-column-span: 4;
    grid-column: 5 / span 4;
    order: 2;
  }
}

@media screen and (min-width: 1136px) {
  .benefit-card {
    grid-column-gap: 36px;
    grid-row-gap: 36px;
    -ms-grid-columns: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    padding: 64px 32px;
  }
  
  .benefit-title {
    font-size: 2.25rem;
  }
  
  .benefit-content {
    -ms-grid-column: 8;
    -ms-grid-column-span: 5;
    grid-column: 8 / span 5;
    order: 2;
  }
  
  .benefit-image {
    display: -ms-grid;
    display: grid;
    grid-column: span 6;
    order: 1;
  }
  
  .benefit-card--reversed .benefit-content {
    -ms-grid-column: 1;
    -ms-grid-column-span: 5;
    grid-column: 1 / span 5;
    order: 1;
  }
  
  .benefit-card--reversed .benefit-image {
    -ms-grid-column: 7;
    -ms-grid-column-span: 6;
    grid-column: 7 / span 6;
    order: 2;
  }
}
</style>
