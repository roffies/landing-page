import { ref } from 'vue'

export function useMobileMenu() {
  const isMenuOpen = ref(false)

  const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = (): void => {
    isMenuOpen.value = false
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  }
}
