<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerSections = [
  {
    label: 'footer.product',
    links: [
      { title: 'footer.features', href: '#funciones' },
      { title: 'footer.benefits', href: '#beneficios' }
    ]
  },
  {
    label: 'footer.company',
    links: [
      { title: 'footer.faqs', href: '#faq' },
      { title: 'footer.aboutUs', href: '#team' },
      { title: 'footer.termsOfService', href: '#terminos' }
    ]
  },
  {
    label: 'footer.socialLinks',
    links: [
      { title: 'footer.facebook', href: '#', icon: 'pi pi-facebook' },
      { title: 'footer.instagram', href: '#', icon: 'pi pi-instagram' },
      { title: 'footer.youtube', href: '#', icon: 'pi pi-youtube' },
      { title: 'footer.linkedin', href: '#', icon: 'pi pi-linkedin' }
    ]
  }
] as const
</script>

<template>
  <footer class="main-footer" role="contentinfo" aria-label="Pie de página de SmartCare">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-brand-section">
          <div class="footer-brand">
            <img 
              src="/images/smartcare-logo.png" 
              alt="SmartCare Logo" 
              class="footer-logo"
            />
            <p class="footer-copyright">
              {{ t('footer.copyright') }}
            </p>
          </div>
        </div>

        <div class="footer-links-grid">
          <div 
            v-for="section in footerSections" 
            :key="section.label"
            class="footer-section"
          >
            <h3 class="footer-section-title">{{ t(section.label) }}</h3>
            <ul class="footer-links" role="list">
              <li 
                v-for="link in section.links" 
                :key="link.title"
                class="footer-link-item"
                role="listitem"
              >
                <a 
                  :href="link.href"
                  class="footer-link"
                  :aria-label="t(`${link.title}AriaLabel`)"
                >
                  <i 
                    v-if="'icon' in link && link.icon" 
                    :class="link.icon" 
                    class="footer-link-icon"
                    aria-hidden="true"
                  ></i>
                  {{ t(link.title) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem 2rem 0 0;
  padding: var(--spacing-xxxl) var(--spacing-xl);
  color: var(--primary-dark);
}

.footer-content {
  width: 100%;
}

.footer-grid {
  display: grid;
  gap: var(--spacing-xxxl);
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1280px) {
  .footer-grid {
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-xxxl);
  }
}

.footer-brand-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.footer-logo {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

.footer-copyright {
  color: var(--primary-medium);
  font-size: var(--font-size-sm);
  margin: 0;
  text-align: center;
}

.footer-links-grid {
  display: grid;
  gap: var(--spacing-xxxl);
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 768px) {
  .footer-links-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (min-width: 1280px) {
  .footer-links-grid {
    margin-top: 0;
  }
}

.footer-section {
  margin-bottom: var(--spacing-lg);
}

.footer-section-title {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--primary-dark);
  margin: 0 0 var(--spacing-md) 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-link-item {
  margin: 0;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-medium);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: var(--transitions-color);
  gap: var(--spacing-xs);
}

.footer-link:hover {
  color: var(--primary-dark);
}

.footer-link-icon {
  font-size: var(--font-size-sm);
  width: 1rem;
  height: 1rem;
}

@media screen and (max-width: 768px) {
  .main-footer {
    padding: var(--spacing-xxl) var(--spacing-md);
    border-radius: 1.5rem 1.5rem 0 0;
  }
  
  .footer-links-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

@media screen and (max-width: 480px) {
  .footer-links-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>