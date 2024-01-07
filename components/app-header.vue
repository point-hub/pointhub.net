<script setup lang="ts">
import { useSidebarStore } from '@point-hub/papp'
import { ref } from 'vue'

const top = ref()
const sidebarStore = ref()
const isSidebarOpen = ref(false)

const scrollListener = () => {
  top.value = window.scrollY
}

onMounted(() => {
  sidebarStore.value = useSidebarStore()
  isSidebarOpen.value = sidebarStore.value.isSidebarOpen

  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>

<template>
  <nav class="header" :class="{ 'bg-[#16803C]': top >= 60 }">
    <div class="header-container mx-auto container">
      <!-- Left Header -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/">
          <img class="h-8" src="https://assets.pointhub.net/assets/images/logo/white/logo.png" />
        </NuxtLink>
      </div>
      <!-- Right Header -->
      <div class="flex items-center gap-8">
        <div class="hidden md:(flex items-center gap-8)">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
        <ClientOnly>
          <a href="javascript:void(0)" class="md:hidden" @click="sidebarStore.toggleSidebar()">
            <i v-if="!isSidebarOpen" class="block w-6 h-6 i-far-bars"></i>
            <i v-else class="block w-6 h-6 i-far-xmark"></i>
          </a>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
a {
  @apply text-white hover:text-yellow-400;
}

nav.header {
  @apply fixed top-0 flex w-full z-10 px-4 py-6 dark:bg-slate-900 transition-all text-white;
}

.is-sidebar-open nav.header {
  @apply lg:w-[calc(100%-(var(--sidebar-panel-width)+var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))] duration-300 transition-all;
}

.header-container {
  @apply relative w-full flex items-center justify-between;
}
</style>
