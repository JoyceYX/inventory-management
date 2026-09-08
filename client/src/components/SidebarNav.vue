<template>
  <div
    v-if="isMobileOpen"
    class="sidebar-backdrop"
    @click="closeMobile"
  ></div>

  <aside class="sidebar" :class="{ collapsed: isCollapsed, 'mobile-open': isMobileOpen }">
    <div class="sidebar-header">
      <div class="brand">
        <span class="brand-mark">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M10 2.5L17 6.5V13.5L10 17.5L3 13.5V6.5L10 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="10" cy="10" r="2" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </span>
        <div class="brand-text">
          <h1>{{ t('nav.companyName') }}</h1>
          <span class="brand-subtitle">{{ t('nav.subtitle') }}</span>
        </div>
      </div>
      <button
        class="collapse-toggle"
        @click="toggleCollapsed"
        :aria-label="isCollapsed ? t('nav.expandSidebar') : t('nav.collapseSidebar')"
      >
        <svg
          class="collapse-icon"
          :class="{ 'collapse-icon-flipped': isCollapsed }"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <rect x="2.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="nav-label">{{ t('nav.overview') }}</span>
      </router-link>

      <router-link to="/inventory" class="nav-link" :class="{ active: $route.path === '/inventory' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L17 5.5V14.5L10 18L3 14.5V5.5L10 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M3 5.5L10 9L17 5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M10 9V18" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="nav-label">{{ t('nav.inventory') }}</span>
      </router-link>

      <router-link to="/orders" class="nav-link" :class="{ active: $route.path === '/orders' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <rect x="4" y="3" width="12" height="15" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M7.5 2.5H12.5V4.5H7.5V2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M7 9H13M7 12H13M7 15H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="nav-label">{{ t('nav.orders') }}</span>
      </router-link>

      <router-link to="/demand" class="nav-link" :class="{ active: $route.path === '/demand' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <path d="M3 14L8 9L11.5 12.5L17 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13 6H17V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="nav-label">{{ t('nav.demandForecast') }}</span>
      </router-link>

      <router-link to="/spending" class="nav-link" :class="{ active: $route.path === '/spending' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 6.5V13.5M12 8C12 7 11 6.5 10 6.5C9 6.5 8 7 8 8C8 9 9 9.3 10 9.5C11 9.7 12 10 12 11.5C12 12.5 11 13.5 10 13.5C9 13.5 8 13 8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="nav-label">{{ t('nav.finance') }}</span>
      </router-link>

      <router-link to="/reports" class="nav-link" :class="{ active: $route.path === '/reports' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <path d="M3 17V4M3 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="5.5" y="10.5" width="2.5" height="5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="10" y="7.5" width="2.5" height="8" stroke="currentColor" stroke-width="1.5"/>
          <rect x="14.5" y="12.5" width="2.5" height="3" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="nav-label">{{ t('nav.reports') }}</span>
      </router-link>

      <router-link to="/backlog" class="nav-link" :class="{ active: $route.path === '/backlog' }" @click="closeMobile">
        <svg class="nav-icon" viewBox="0 0 20 20" fill="none">
          <path d="M10 3L17 7L10 11L3 7L10 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M3 11L10 15L17 11" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M3 14.5L10 18.5L17 14.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <span class="nav-label">{{ t('nav.backlog') }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <LanguageSwitcher />
      <ProfileMenu
        @show-profile-details="$emit('show-profile-details')"
        @show-tasks="$emit('show-tasks')"
      />
    </div>
  </aside>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import { useSidebar } from '../composables/useSidebar'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ProfileMenu from './ProfileMenu.vue'

defineEmits(['show-profile-details', 'show-tasks'])

const { t } = useI18n()
const { isCollapsed, isMobileOpen, toggleCollapsed, closeMobile } = useSidebar()
</script>

<style scoped>
.sidebar-backdrop {
  display: none;
}

.sidebar {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
  min-height: var(--topbar-height);
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
}

.brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--color-brand);
}

.brand-mark svg {
  width: 24px;
  height: 24px;
}

.brand-text {
  min-width: 0;
  overflow: hidden;
}

.brand-text h1 {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.collapse-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.collapse-toggle:hover {
  background: var(--color-bg);
  color: var(--color-text-primary);
}

.collapse-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.collapse-icon-flipped {
  transform: rotate(180deg);
}

.sidebar.collapsed .sidebar-header {
  justify-content: center;
}

.sidebar.collapsed .brand-text {
  display: none;
}

.sidebar.collapsed .collapse-toggle {
  display: none;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-2);
  overflow-y: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  border-radius: var(--radius-md);
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-border-subtle);
}

.nav-link.active {
  color: var(--color-brand);
  background: var(--color-brand-bg);
  border-left: 3px solid var(--color-brand);
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.nav-label {
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar.collapsed .sidebar-nav {
  align-items: center;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
  padding: var(--space-3);
  width: 48px;
}

.sidebar.collapsed .nav-label {
  display: none;
}

.sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.sidebar.collapsed .sidebar-footer {
  align-items: center;
}

.sidebar.collapsed .sidebar-footer :deep(.profile-button),
.sidebar.collapsed .sidebar-footer :deep(.language-button) {
  width: 48px;
  padding: 0.5rem;
  justify-content: center;
}

.sidebar.collapsed .sidebar-footer :deep(.profile-name),
.sidebar.collapsed .sidebar-footer :deep(.language-label),
.sidebar.collapsed .sidebar-footer :deep(.chevron) {
  display: none;
}

/* Mobile off-canvas drawer */
@media (max-width: 767px) {
  .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.4);
    z-index: 200;
  }

  .sidebar,
  .sidebar.collapsed {
    position: fixed;
    top: 0;
    left: -100%;
    width: var(--sidebar-width);
    z-index: 201;
    transition: left 0.25s ease;
  }

  .sidebar.mobile-open {
    left: 0;
  }

  /* On mobile the drawer always shows full labels, ignoring the desktop collapsed state */
  .sidebar.collapsed .sidebar-header {
    justify-content: space-between;
  }

  .sidebar.collapsed .brand-text {
    display: block;
  }

  .sidebar.collapsed .collapse-toggle {
    display: none;
  }

  .sidebar.collapsed .sidebar-nav {
    align-items: stretch;
  }

  .sidebar.collapsed .nav-link {
    justify-content: flex-start;
    padding: var(--space-3) var(--space-4);
    width: auto;
  }

  .sidebar.collapsed .nav-label {
    display: inline;
  }

  .sidebar.collapsed .sidebar-footer {
    align-items: stretch;
  }

  .sidebar.collapsed .sidebar-footer :deep(.profile-button),
  .sidebar.collapsed .sidebar-footer :deep(.language-button) {
    width: auto;
    padding: 0.5rem 0.875rem;
    justify-content: flex-start;
  }

  .sidebar.collapsed .sidebar-footer :deep(.profile-name),
  .sidebar.collapsed .sidebar-footer :deep(.language-label),
  .sidebar.collapsed .sidebar-footer :deep(.chevron) {
    display: inline;
  }
}
</style>
