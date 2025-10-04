import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

export function useMetaTags() {
  const { locale, t } = useI18n()

  const updateMetaTags = () => {
    // Update document title
    document.title = t('app.title')
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('app.description'))
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('app.keywords'))
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', t('app.title'))
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', t('app.description'))
    }
    
    // Update Open Graph locale
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) {
      const localeCode = locale.value === 'en' ? 'en_US' : 'es_PE'
      ogLocale.setAttribute('content', localeCode)
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = locale.value
  }

  // Watch for locale changes and update meta tags
  watch(locale, updateMetaTags, { immediate: true })

  return {
    updateMetaTags
  }
}
