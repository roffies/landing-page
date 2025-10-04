<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './language-switcher.component.vue'
import { useScrollBehavior } from '../composables/useScrollBehavior'
import { useMobileMenu } from '../composables/useMobileMenu'

const { t, locale } = useI18n()
const { isVisible, hasBackground } = useScrollBehavior()
const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

const SUPPORTED_LOCALES = ['es', 'en'] as const

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

const navigationLinks = [
  {
    id: 'functions',
    href: '#funciones',
    'label-key': 'navbar.functions',
    'aria-label-key': 'navbar.functions-aria-label'
  },
  {
    id: 'benefits',
    href: '#beneficios',
    'label-key': 'navbar.benefits',
    'aria-label-key': 'navbar.benefits-aria-label'
  },
  {
    id: 'team',
    href: '#team',
    'label-key': 'navbar.about',
    'aria-label-key': 'navbar.about-aria-label'
  },
  {
    id: 'faq',
    href: '#faq',
    'label-key': 'navbar.faq',
    'aria-label-key': 'navbar.faq-aria-label'
  }
] as const



watch(isVisible, (newValue) => {
  if (!newValue) {
    closeMenu()
  }
})

onMounted(() => {
  initializeLocale()
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
    :aria-label="t('navbar.aria-label')"
  >
    <div class="logo">
      <a 
        href="#hero" 
        :aria-label="t('navbar.logo-aria-label')"
      >
        <img 
          src="/images/smartcare-logo.png" 
          :alt="t('navbar.logo-alt')" 
          class="logo-image" 
        />
        <span class="logo-text">{{ t('navbar.logo') }}</span>
      </a>
    </div>

    <ul 
      class="nav-links hidden xl:flex" 
      role="menubar"
      :aria-label="t('navbar.navigation-aria-label')"
    >
      <li 
        v-for="link in navigationLinks" 
        :key="link.id"
        role="none"
      >
        <a 
          :href="link.href" 
          :aria-label="t(link['aria-label-key'])"
          @click="closeMenu"
          role="menuitem"
        >
          {{ t(link['label-key']) }}
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
        :aria-label="t('navbar.login-aria-label')"
        @click.prevent
      >
        {{ t('navbar.login') }}
      </a>
      <a 
        href="#" 
        class="auth-link register-btn" 
        :aria-label="t('navbar.register-aria-label')"
        @click.prevent
      >
        {{ t('navbar.register') }}
      </a>
    </div>

    <button 
      type="button"
      class="mobile-menu-btn xl:hidden" 
      :aria-label="t('navbar.menu-toggle-aria-label')"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <i class="pi pi-bars" aria-hidden="true"></i>
    </button>

    <div 
      v-if="isMenuOpen" 
      class="mobile-menu-overlay" 
      :aria-label="t('navbar.menu-overlay-aria-label')"
      @click="closeMenu"
    ></div>

    <div 
      class="mobile-menu" 
      :class="{ 'mobile-menu-open': isMenuOpen }"
      role="navigation"
      :aria-label="t('navbar.mobile-menu-aria-label')"
    >
      <ul 
        class="mobile-nav-links" 
        role="menubar"
        :aria-label="t('navbar.mobile-navigation-aria-label')"
      >
        <li 
          v-for="link in navigationLinks" 
          :key="`mobile-${link.id}`"
          role="none"
        >
          <a 
            :href="link.href" 
            :aria-label="t(link['aria-label-key'])"
            @click="closeMenu"
            role="menuitem"
          >
            {{ t(link['label-key']) }}
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
          :aria-label="t('navbar.login-aria-label')"
          @click.prevent="closeMenu"
        >
          {{ t('navbar.login') }}
        </a>
        <a 
          href="#" 
          class="auth-link register-btn" 
          :aria-label="t('navbar.register-aria-label')"
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
  height: var(--navbar-height);
  background: transparent !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-xl);
  z-index: var(--z-dropdown);
  transition: var(--transitions-cubic-bezier);
  transform: translateY(0);
}

.navbar-visible {
  transform: translateY(0);
  background: transparent !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  box-shadow: none;
}

.navbar-hidden {
  transform: translateY(-100%);
  background: transparent !important;
  -webkit-backdrop-filter: none;
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
  -webkit-backdrop-filter: blur(15px);
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
  transition: var(--transitions-normal);
}


.logo-image {
  width: var(--logo-size);
  height: var(--logo-size);
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
  transition: var(--transitions-normal);
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
  transition: var(--transitions-normal);
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
  transition: var(--transitions-normal);
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
  transition: var(--transitions-normal);
}

.mobile-menu-btn:hover {
  background: var(--accent-lighter);
  color: var(--primary-dark);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: var(--mobile-menu-width);
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(66, 103, 102, 0.98) 0%,
    rgba(66, 103, 102, 0.9) 50%,
    rgba(66, 103, 102, 0.8) 100%
  );
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transition: right 0.3s ease;
  z-index: 999;
  padding: 5rem 2rem 2rem 2rem;
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
  transition: var(--transitions-normal);
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