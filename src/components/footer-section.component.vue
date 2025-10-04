<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-brand">
          <h3 class="footer-title">SmartCare</h3>
          <p class="footer-description">
            {{ t('footer.description') }}
          </p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4>{{ t('footer.forDrivers') }}</h4>
            <ul>
              <li><a href="#beneficios">{{ t('footer.benefits') }}</a></li>
              <li><a href="#funciones">{{ t('footer.howItWorks') }}</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>{{ t('footer.forWorkshops') }}</h4>
            <ul>
              <li><a href="#beneficios">{{ t('footer.benefits') }}</a></li>
              <li><a href="#contacto">{{ t('footer.contact') }}</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>{{ t('footer.company') }}</h4>
            <ul>
              <li><a href="#sobre-nosotros">{{ t('footer.aboutUs') }}</a></li>
              <li><a href="#terminos">{{ t('footer.terms') }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© 2025 SmartCare Perú. {{ t('footer.allRightsReserved') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background: var(--accent-light);
  color: var(--primary-dark);
  padding: 3rem 0 1.5rem 0;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  max-width: 400px;
  text-align: center;
}

.footer-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 1rem 0;
}

.footer-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--primary-medium);
  margin: 0;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  color: var(--primary-dark);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: var(--primary-medium);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: var(--primary-dark);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--primary-light);
  text-align: center;
}

.footer-copyright {
  color: var(--primary-medium);
  font-size: 0.9rem;
}

.footer-copyright p {
  margin: 0;
}

@media screen and (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    text-align: center;
    margin: 0 auto;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-content {
    padding: 0 1rem;
  }
}
</style>