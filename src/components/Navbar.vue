<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="logo"><a href="#hero">ROFFIES</a></div>

    <ul class="nav-links hidden lg:flex">
      <li><a href="#funciones" @click="closeMenu">Funciones</a></li>
      <li><a href="#beneficios" @click="closeMenu">Beneficios</a></li>
      <li><a href="#ofrecemos" @click="closeMenu">Qué Ofrecemos</a></li>
      <li><a href="#team" @click="closeMenu">Nosotros</a></li>
    </ul>

    <div class="auth-lang hidden lg:flex">
      <router-link to="/login" class="auth-link">Iniciar Sesión</router-link>
      <router-link to="/signup" class="auth-link">Registrar</router-link>
      <button class="lang-btn">🌐 ESP</button>
    </div>

    <button class="mobile-menu-btn lg:hidden" @click="toggleMenu">
      <i class="pi pi-bars"></i>
    </button>

    <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu"></div>

    <div class="mobile-menu" :class="{ 'mobile-menu-open': isMenuOpen }">
      <ul class="mobile-nav-links">
        <li><a href="#funciones" @click="closeMenu">Funciones</a></li>
        <li><a href="#beneficios" @click="closeMenu">Beneficios</a></li>
        <li><a href="#ofrecemos" @click="closeMenu">Qué Ofrecemos</a></li>
        <li><a href="#team" @click="closeMenu">Nosotros</a></li>
      </ul>
      
      <div class="mobile-auth">
        <router-link to="/login" class="auth-link" @click="closeMenu">Iniciar Sesión</router-link>
        <router-link to="/signup" class="auth-link" @click="closeMenu">Registrar</router-link>
        <button class="lang-btn">🌐 ESP</button>
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
  background: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
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
}

.nav-links a:hover {
  text-decoration: underline;
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
}

.auth-link:hover {
  text-decoration: underline;
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