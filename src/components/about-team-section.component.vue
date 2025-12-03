<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const { t } = useI18n()

const props = defineProps({
  videoSrc: { type: String, default: '' }
})
</script>

<template>
  <section id="about-team" class="about-team-section" role="region" :aria-label="t('aboutTeam.aria-label')">
    <div class="about-team-container">
      <h2 class="about-team-title">{{ t('aboutTeam.title') }}</h2>

      <div class="video-wrapper">
        <iframe
          v-if="videoSrc"
          :src="videoSrc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :title="t('aboutTeam.videoTitle')"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-team-section {
  padding: var(--spacing-xxl) var(--spacing-xl);
  text-align: center;
  background: transparent;
}

.about-team-container {
  max-width: 1100px;
  margin: 0 auto;
}

.about-team-title {
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
  .about-team-title {
    font-size: var(--font-size-hero-tablet);
  }
}
</style>
