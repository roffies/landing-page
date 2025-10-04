import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

export function useMetaTags() {
  const { locale, t } = useI18n()

  const updateMetaTags = () => {
    document.title = t('app.title')
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('app.description'))
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('app.keywords'))
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', t('app.title'))
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', t('app.description'))
    }
    
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) {
      ogLocale.setAttribute('content', t('app.locale'))
    }
    
    document.documentElement.lang = locale.value
  }

  watch(locale, updateMetaTags, { immediate: true })

  return {
    updateMetaTags
  }
}
