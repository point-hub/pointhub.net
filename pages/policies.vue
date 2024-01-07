<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <div class="flex flex-col h-full gap-16">
    <div class="bg-header">
      <div class="container mx-auto pt-[80px] h-60 lg:h-100">
        <div class="flex flex-wrap items-center justify-center text-white">
          <div class="lg:flex-1 flex flex-col gap-4 justify-center">
            <h1 class="text-3xl lg:text-5xl font-extrabold">Policies Overview</h1>
            <p>
              We build privacy that works for everyone. Protecting our users’ privacy and security is a responsibility
              that comes with creating products and services that are free of cost and accessible for all.
            </p>
          </div>
          <div class="lg:flex-1 lg:flex items-center justify-center hidden">
            <img class="h-80" src="@/assets/images/policies/illustration-terms.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-full flex p-4 gap-16 container mx-auto">
      <div class="hidden lg:block">
        <PoliciesSidebarMenu></PoliciesSidebarMenu>
      </div>
      <div class="prose max-w-screen-lg">
        <h1>Overview</h1>
        <div class="flex flex-col lg:flex-row gap-4">
          <BaseCard>
            <h3>Privacy Policy</h3>
            <p>Explains what information we collect and why, how we use it, and how to review and update it.</p>
            <NuxtLink to="/privacy">Read our Privacy Policy</NuxtLink>
          </BaseCard>
          <BaseCard>
            <h3>Terms of Service</h3>
            <p>Describes the rules you agree to when using our apps, marketplace, or services.</p>

            <NuxtLink to="/terms">Read our Terms of Service</NuxtLink>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-header {
  background-image: url('@/assets/images/banner-background.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  @apply p-4;
}
</style>
