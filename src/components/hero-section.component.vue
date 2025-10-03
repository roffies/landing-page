<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const userLocation = ref('')

// TODO: Implement workshop search functionality
</script>

<template>
  <section id="hero" class="hero-section" role="banner" aria-label="Sección principal de SmartCare">
    <div class="hero-background">
      <img src="/images/hero-background.svg" alt="Fondo de SmartCare con ilustración de mantenimiento automotriz" class="hero-bg-image" />
    </div>
    
    <div class="container">
      <div class="grid justify-content-center">
        <div class="col-12">
          <div class="hero-content">
            <h1 class="hero-title mb-3">
              <span class="d-block">{{ t('hero.title') }}</span>
              <span class="d-block">{{ t('hero.subtitle') }}</span>
            </h1>
            <h2 class="hero-subtitle mb-5">{{ t('hero.description') }}</h2>

            <div class="location-inputs">
              <div class="location-input-container">
                <div class="location-input">
                  <i class="pi pi-map-marker location-icon" aria-hidden="true"></i>
                  <InputText 
                    v-model="userLocation" 
                    :placeholder="t('hero.locationPlaceholder')"
                    class="location-field"
                    aria-label="Campo de ubicación para buscar talleres"
                    autocomplete="address-level1"
                  />
                  <button 
                    v-if="userLocation" 
                    @click="userLocation = ''"
                    class="clear-btn"
                    aria-label="Limpiar ubicación"
                    type="button"
                  >
                    <i class="pi pi-times" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <Button 
                :label="t('hero.searchButton')"
                class="see-workshops-btn"
                aria-label="Buscar talleres cercanos"
                type="button"
              />

              <a href="/login" class="login-link" aria-label="Iniciar sesión para ver actividad reciente">{{ t('hero.loginLink') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8vh;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-title {
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title span {
  display: block;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  color: #fff;
  opacity: 0.8;
  line-height: 1.4;
  text-wrap: balance;
}

.hero-content {
  text-align: center;
  padding: 1rem;
  z-index: 2;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .location-input-container {
    max-width: 300px;
  }
  .location-input {
    padding: 0.4rem 0.8rem;
    height: 36px;
    min-height: 36px;
  }
  .location-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .location-field {
    font-size: 0.8rem;
  }
  .see-workshops-btn {
    padding: 0.5rem 1.5rem;
    font-size: 0.85rem;
    margin: 1rem auto 0.5rem auto;
  }
}

@media (min-width: 1200px) {
  .hero-subtitle {
    font-size: 1.2rem;
  }
}

.location-inputs {
  padding: 2rem 0;
  margin-bottom: 1rem;
  text-align: center;
}

.location-input-container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.location-input {
  display: flex;
  align-items: center;
  background: white;
  border-radius: var(--border-radius-md);
  padding: 1rem 1.5rem;
  height: 56px;
  min-height: 56px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(66, 103, 102, 0.1);
  border: 2px solid var(--accent-light);
}

.location-input:hover {
  border-color: var(--primary-light);
  box-shadow: 0 4px 12px rgba(66, 103, 102, 0.15);
}

.location-input:focus-within {
  border-color: var(--primary-medium);
  box-shadow: 0 4px 16px rgba(66, 103, 102, 0.2);
}

.location-icon {
  color: var(--primary-medium);
  margin-right: 0.75rem;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.location-field {
  flex: 1;
  border: none;
  font-size: 0.9rem;
  line-height: 1.5;
  color: black;
  outline: none;
  background: transparent;
}

.location-field::placeholder {
  color: var(--primary-dark);
  opacity: 0.8;
}

.clear-btn {
  background: none;
  border: none;
  color: var(--primary-light);
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.clear-btn:hover {
  background: var(--accent-light);
  color: var(--primary-medium);
}

.see-workshops-btn {
  width: auto;
  background: var(--accent-light);
  color: #000;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s ease;
  margin: 1.5rem auto 1rem auto;
  box-shadow: 0 6px 20px rgba(59, 108, 90, 0.4);
  display: block;
  text-transform: uppercase;
}

.see-workshops-btn:hover {
  background: var(--primary-light) !important; 
  box-shadow: 0 8px 25px rgba(59, 108, 90, 0.5);
  transform: translateY(-3px);
}

.login-link {
  color: var(--accent-lightest);
  opacity: 0.7;
  text-decoration: underline;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.login-link:hover {
  color: var(--primary-light);
}

/* Override PrimeVue styles */
:deep(.p-inputtext) {
  border: none;
  background: transparent;
  box-shadow: none;
  padding: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: black;
}

:deep(.p-inputtext:focus) {
  border: none;
  box-shadow: none;
}
</style>
