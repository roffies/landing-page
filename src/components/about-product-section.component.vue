<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  videoSrc: { type: String, default: '' }
})
</script>

<template>
  <section id="about-product" class="about-product-section" role="region" :aria-label="t('aboutProduct.aria-label')">
    <div class="about-product-container">
      <h2 class="about-product-title">{{ t('aboutProduct.title') }}</h2>

      <div class="video-wrapper">
        <iframe
          v-if="videoSrc"
          :src="videoSrc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :title="t('aboutProduct.videoTitle')"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-product-section {
  padding: var(--spacing-xxxl) var(--spacing-xl);
  text-align: center;
  background: transparent;
}

.about-product-container {
  max-width: 1100px;
  margin: 0 auto;
}

.about-product-title {
  font-size: var(--font-size-hero-mobile);
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 auto var(--spacing-lg) auto;
  text-align: center;
  max-width: 700px;
  letter-spacing: -0.02em;
}

.video-wrapper {
  margin-top: var(--spacing-md);
  display: block;
  width: 100%;
}

.video-wrapper iframe {
  width: 100%;
  height: 560px;
  border-radius: var(--border-radius-md);
  border: 0;
}

.video-placeholder {
  height: 320px;
  border-radius: var(--border-radius-md);
  background: var(--accent-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-medium);
}

@media screen and (max-width: 768px) {
  .video-wrapper iframe {
    height: 220px;
  }
  .about-product-title {
    font-size: var(--font-size-hero-tablet);
  }
}
</style>
