import { ref } from 'vue'

// Persist collapsed state to localStorage, mirroring the app-locale pattern in useI18n.js
const savedCollapsed = localStorage.getItem('sidebar-collapsed') === 'true'
const isCollapsed = ref(savedCollapsed)

// Mobile off-canvas drawer state is session-only (not persisted)
const isMobileOpen = ref(false)

export function useSidebar() {
  const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value
    localStorage.setItem('sidebar-collapsed', String(isCollapsed.value))
  }

  const toggleMobile = () => {
    isMobileOpen.value = !isMobileOpen.value
  }

  const closeMobile = () => {
    isMobileOpen.value = false
  }

  return {
    isCollapsed,
    isMobileOpen,
    toggleCollapsed,
    toggleMobile,
    closeMobile
  }
}
