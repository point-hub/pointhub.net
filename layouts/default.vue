<script setup lang="ts">
import {
  AppSidebar,
  useMobileBreakpoint,
  useSidebar,
  useSidebarStore,
  useScreenSize,
  useDarkMode
} from '@point-hub/papp'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { apps } from '@/composable/apps'

const route = useRoute()
const mobileBreakpoint = ref()
const sidebarStore = ref()
if (process.client) {
  useScreenSize()
  useSidebar()
  useDarkMode()
  mobileBreakpoint.value = useMobileBreakpoint()
  sidebarStore.value = useSidebarStore()
}

const choosenAppIndex = ref(0)
const choosenTitle = ref(apps[choosenAppIndex.value].name)
const onChooseApp = (path: string) => {
  for (const [index, app] of apps.entries()) {
    if (app.path === path) {
      choosenTitle.value = app.name
      choosenAppIndex.value = index
    }
  }
}

onMounted(() => {
  sidebarStore.value.closeSidebar()
  for (const [index, app] of apps.entries()) {
    if (route.path.includes(app.path)) {
      choosenTitle.value = app.name
      choosenAppIndex.value = index
    }
  }
})
</script>

<template>
  <div>
    <div class="app-layout">
      <!-- Header -->
      <AppHeader></AppHeader>
      <!-- Sidebar -->
      <ClientOnly>
        <component
          :is="AppSidebar"
          :title="choosenTitle"
          :apps="apps"
          :menus="apps[choosenAppIndex].menu ?? []"
          :is-sidebar-open="sidebarStore.isSidebarOpen"
          :is-mobile="mobileBreakpoint.isMobile()"
          @choose="onChooseApp"
        />
      </ClientOnly>
      <!-- Main Container -->
      <div class="main-container">
        <!-- Main Content -->
        <main class="main-content">
          <slot></slot>
        </main>

        <!-- Footer -->
        <ClientOnly>
          <AppFooter></AppFooter>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.app-layout {
  @apply h-100vh w-full flex grow;
}

.main-container {
  @apply flex flex-col w-full transition-all duration-300;
}

.is-sidebar-open .main-container {
  @apply lg:w-[calc(100%-(var(--sidebar-panel-width)+var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))];
}

.main-content {
  @apply flex-1 pb-48;
}

.main-content-header {
  @apply flex space-x-4 py-2 overflow-x-hidden;
}

.main-content-body {
  @apply flex flex-col space-y-5;
}
</style>
