import { ref, onMounted, onUnmounted } from 'vue'

const SCROLL_THRESHOLD = 100

export function useScrollBehavior() {
  const isVisible = ref(true)
  const lastScrollY = ref(0)
  const hasBackground = ref(false)

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

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isVisible,
    hasBackground,
    handleScroll
  }
}
