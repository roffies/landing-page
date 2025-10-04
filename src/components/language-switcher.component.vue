<script setup lang="ts">
interface Props {
  currentLocale: string
  class?: string
}

defineProps<Props>()
defineEmits<{
  languageChange: [locale: string]
}>()
</script>

<template>
  <div 
    class="language-switcher" 
    :class="class"
    role="group"
    :aria-label="$t('navbar.language-switcher-aria-label')"
  >
    <button 
      type="button"
      class="lang-tab" 
      :class="{ active: currentLocale === 'es' }"
      :aria-label="$t('navbar.spanish-aria-label')"
      :aria-pressed="currentLocale === 'es'"
      @click="$emit('languageChange', 'es')"
    >
      ES
    </button>
    <button 
      type="button"
      class="lang-tab" 
      :class="{ active: currentLocale === 'en' }"
      :aria-label="$t('navbar.english-aria-label')"
      :aria-pressed="currentLocale === 'en'"
      @click="$emit('languageChange', 'en')"
    >
      EN
    </button>
    <div 
      class="lang-indicator" 
      :class="{ 'en-active': currentLocale === 'en' }"
      :aria-hidden="true"
    ></div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.lang-tab {
  background: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  min-width: 24px;
}

.lang-tab.active {
  color: white;
  font-weight: 600;
}

.lang-indicator {
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(50% - 1px);
  height: calc(100% - 2px);
  background: var(--primary-light);
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.lang-indicator.en-active {
  transform: translateX(100%);
}

.mobile-lang-switcher {
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
}

.mobile-lang-switcher .lang-tab {
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>
