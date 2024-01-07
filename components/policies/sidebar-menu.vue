<template>
  <!-- Navigation -->
  <div class="h-full flex flex-col mt-4 pr-4 border-r min-w-64">
    <NuxtLink class="py-2 px-4" to="/policies">Overview</NuxtLink>
    <NuxtLink class="py-2 px-4" to="/privacy">Privacy Policy</NuxtLink>
    <NuxtLink class="py-2 px-4" to="/terms">Terms of Service</NuxtLink>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-slate-200 rounded-xl dark:bg-slate-600;
}
</style>
