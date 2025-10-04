<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './language-switcher.component.vue'

const { t, locale } = useI18n()

const isMenuOpen = ref(false)
const isVisible = ref(true)
const lastScrollY = ref(0)
const hasBackground = ref(false)

const SCROLL_THRESHOLD = 100
const SUPPORTED_LOCALES = ['es', 'en'] as const

const navigationLinks = [
  {
    id: 'functions',
    href: '#funciones',
    labelKey: 'navbar.functions',
    ariaLabelKey: 'navbar.functionsAriaLabel'
  },
  {
    id: 'benefits',
    href: '#beneficios',
    labelKey: 'navbar.benefits',
    ariaLabelKey: 'navbar.benefitsAriaLabel'
  },
  {
    id: 'offerings',
    href: '#ofrecemos',
    labelKey: 'navbar.offerings',
    ariaLabelKey: 'navbar.offeringsAriaLabel'
  },
  {
    id: 'about',
    href: '#team',
    labelKey: 'navbar.about',
    ariaLabelKey: 'navbar.aboutAriaLabel'
  }
] as const

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (): void => {
  isMenuOpen.value = false
}

const handleScroll = (): void => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > lastScrollY.value && currentScrollY > SCROLL_THRESHOLD) {
    isVisible.value = false
  } else {
    isVisible.value = true
  }
  
  hasBackground.value = currentScrollY > SCROLL_THRESHOLD && isVisible.value
  
  lastScrollY.value = currentScrollY
}

const setLanguage = (newLocale: string): void => {
  if (SUPPORTED_LOCALES.includes(newLocale as any)) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }
}

const initializeLocale = (): void => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale as any)) {
    locale.value = savedLocale
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  initializeLocale()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="navbar" 
    :class="{ 
      'navbar-visible': isVisible,
      'navbar-hidden': !isVisible,
      'navbar-with-background': hasBackground
    }"
    role="navigation"
    :aria-label="t('navbar.ariaLabel')"
  >
    <div class="logo">
      <a 
        href="#hero" 
        :aria-label="t('navbar.logoAriaLabel')"
      >
        <img 
          src="/images/smartcare-logo.png" 
          :alt="t('navbar.logoAlt')" 
          class="logo-image" 
        />
        <span class="logo-text">{{ t('navbar.logo') }}</span>
      </a>
    </div>

    <ul 
      class="nav-links hidden xl:flex" 
      role="menubar"
      :aria-label="t('navbar.navigationAriaLabel')"
    >
      <li 
        v-for="link in navigationLinks" 
        :key="link.id"
        role="none"
      >
        <a 
          :href="link.href" 
          :aria-label="t(link.ariaLabelKey)"
          @click="closeMenu"
          role="menuitem"
        >
          {{ t(link.labelKey) }}
        </a>
      </li>
    </ul>

    <div class="auth-lang hidden xl:flex">
      <LanguageSwitcher 
        :current-locale="locale"
        @language-change="setLanguage"
      />
      <a 
        href="#" 
        class="auth-link" 
        :aria-label="t('navbar.loginAriaLabel')"
        @click.prevent
      >
        {{ t('navbar.login') }}
      </a>
      <a 
        href="#" 
        class="auth-link register-btn" 
        :aria-label="t('navbar.registerAriaLabel')"
        @click.prevent
      >
        {{ t('navbar.register') }}
      </a>
    </div>

    <button 
      class="mobile-menu-btn xl:hidden" 
      :aria-label="t('navbar.menuToggleAriaLabel')"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <i class="pi pi-bars" aria-hidden="true"></i>
    </button>

    <div 
      v-if="isMenuOpen" 
      class="mobile-menu-overlay" 
      :aria-label="t('navbar.menuOverlayAriaLabel')"
      @click="closeMenu"
    ></div>

    <div 
      class="mobile-menu" 
      :class="{ 'mobile-menu-open': isMenuOpen }"
      role="menu"
      :aria-label="t('navbar.mobileMenuAriaLabel')"
    >
      <ul 
        class="mobile-nav-links" 
        role="menubar"
        :aria-label="t('navbar.mobileNavigationAriaLabel')"
      >
        <li 
          v-for="link in navigationLinks" 
          :key="`mobile-${link.id}`"
          role="none"
        >
          <a 
            :href="link.href" 
            :aria-label="t(link.ariaLabelKey)"
            @click="closeMenu"
            role="menuitem"
          >
            {{ t(link.labelKey) }}
          </a>
        </li>
      </ul>
      
      <div class="mobile-auth">
        <LanguageSwitcher 
          :current-locale="locale"
          @language-change="setLanguage"
          class="mobile-lang-switcher"
        />
        <a 
          href="#" 
          class="auth-link" 
          :aria-label="t('navbar.loginAriaLabel')"
          @click.prevent="closeMenu"
        >
          {{ t('navbar.login') }}
        </a>
        <a 
          href="#" 
          class="auth-link register-btn" 
          :aria-label="t('navbar.registerAriaLabel')"
          @click.prevent="closeMenu"
        >
          {{ t('navbar.register') }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: transparent !important;
  backdrop-filter: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.navbar-visible {
  transform: translateY(0);
  background: transparent !important;
  backdrop-filter: none;
  box-shadow: none;
}

.navbar-hidden {
  transform: translateY(-100%);
  background: transparent !important;
  backdrop-filter: none;
  box-shadow: none;
}

.navbar-with-background {
  background: linear-gradient(
    180deg,
    rgba(66, 103, 102, 0.98) 0%,
    rgba(66, 103, 102, 0.9) 50%,
    rgba(66, 103, 102, 0.8) 100%
  ) !important;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(66, 103, 102, 0.4);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}


.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--primary-light);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-light);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-links a:hover::after {
  width: 80%;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primary-light);
  transform: translateY(-2px);
}

.auth-lang {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
}

.auth-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.auth-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.register-btn {
  background: var(--primary-light) !important;
  color: #000 !important;
  border: none !important;
  border-radius: var(--border-radius-sm) !important;
  padding: 0.5rem 1.5rem !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(59, 108, 90, 0.3) !important;
  text-transform: uppercase !important;
}

.register-btn:hover {
  background: var(--accent-light) !important;
  color: #000 !important;
  box-shadow: 0 6px 20px rgba(59, 108, 90, 0.4) !important;
  transform: translateY(-2px) !important;
}


.mobile-menu-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--accent-lighter);
  color: var(--primary-dark);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 70px;
  right: -100%;
  width: 280px;
  height: calc(100vh - 70px);
  background: var(--primary-dark);
  backdrop-filter: blur(20px);
  transition: right 0.3s ease;
  z-index: 999;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-menu-open {
  right: 0;
}

.mobile-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-links a:hover {
  color: var(--primary-light);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  margin: -0.5rem;
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.mobile-auth .auth-link {
  padding: 0.75rem 1rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.mobile-auth .auth-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transform: translateY(-2px);
}


.mobile-auth .register-btn {
  background: var(--primary-light) !important;
  color: #000 !important;
  border: none !important;
  border-radius: var(--border-radius-sm) !important;
  padding: 0.75rem 1.5rem !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(59, 108, 90, 0.3) !important;
  text-transform: uppercase !important;
  text-align: center !important;
}

.mobile-auth .register-btn:hover {
  background: var(--accent-light) !important;
  color: #000 !important;
  box-shadow: 0 6px 20px rgba(59, 108, 90, 0.4) !important;
  transform: translateY(-2px) !important;
}

/* Responsive Utilities */
.hidden {
  display: none;
}

@media (min-width: 1200px) {
  .hidden.xl\\:flex {
    display: flex;
  }
  
  .xl\\:hidden {
    display: none;
  }
}
</style>