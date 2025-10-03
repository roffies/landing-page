<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isHovered = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'es' ? 'en' : 'es'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && ['es', 'en'].includes(savedLocale)) {
    locale.value = savedLocale
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="navbar" 
    :class="{ 
      'navbar-scrolled': isScrolled, 
      'navbar-hovered': isHovered 
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="logo"><a href="#hero">{{ t('navbar.logo') }}</a></div>

    <ul class="nav-links hidden lg:flex">
      <li><a href="#funciones" @click="closeMenu">{{ t('navbar.functions') }}</a></li>
      <li><a href="#beneficios" @click="closeMenu">{{ t('navbar.benefits') }}</a></li>
      <li><a href="#ofrecemos" @click="closeMenu">{{ t('navbar.offerings') }}</a></li>
      <li><a href="#team" @click="closeMenu">{{ t('navbar.about') }}</a></li>
    </ul>

    <div class="auth-lang hidden lg:flex">
      <router-link to="/login" class="auth-link">{{ t('navbar.login') }}</router-link>
      <router-link to="/signup" class="auth-link">{{ t('navbar.register') }}</router-link>
      <button class="lang-btn" @click="toggleLanguage">{{ t('navbar.language') }}</button>
    </div>

    <button class="mobile-menu-btn lg:hidden" @click="toggleMenu">
      <i class="pi pi-bars"></i>
    </button>

    <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu"></div>

    <div class="mobile-menu" :class="{ 'mobile-menu-open': isMenuOpen }">
      <ul class="mobile-nav-links">
        <li><a href="#funciones" @click="closeMenu">{{ t('navbar.functions') }}</a></li>
        <li><a href="#beneficios" @click="closeMenu">{{ t('navbar.benefits') }}</a></li>
        <li><a href="#ofrecemos" @click="closeMenu">{{ t('navbar.offerings') }}</a></li>
        <li><a href="#team" @click="closeMenu">{{ t('navbar.about') }}</a></li>
      </ul>
      
      <div class="mobile-auth">
        <router-link to="/login" class="auth-link" @click="closeMenu">{{ t('navbar.login') }}</router-link>
        <router-link to="/signup" class="auth-link" @click="closeMenu">{{ t('navbar.register') }}</router-link>
        <button class="lang-btn" @click="toggleLanguage">{{ t('navbar.language') }}</button>
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
  height: 60px;
  background: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
  transform: translateY(-100%);
}

.navbar-scrolled {
  transform: translateY(0);
  background: rgba(30, 41, 59, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navbar-hovered {
  background: rgba(30, 41, 59, 1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.logo a {
  color: white;
  text-decoration: none;
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
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.nav-links a:hover::before {
  left: 100%;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
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
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.auth-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.lang-btn {
  background: none;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  color: white;
  cursor: pointer;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
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
  top: 60px;
  right: -100%;
  width: 280px;
  height: calc(100vh - 60px);
  background: #1e293b;
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
  color: #3b82f6;
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.mobile-auth .auth-link {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  transition: background 0.2s ease;
}

.mobile-auth .auth-link:hover {
  background: rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

.mobile-auth .lang-btn {
  width: 100%;
  padding: 0.75rem;
  text-align: center;
}

/* Responsive Utilities */
.hidden {
  display: none;
}

@media (min-width: 1024px) {
  .hidden.lg\\:flex {
    display: flex;
  }
  
  .lg\\:hidden {
    display: none;
  }
}
</style>