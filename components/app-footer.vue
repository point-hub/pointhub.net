<script setup lang="ts"></script>

<template>
  <footer>
    <div class="bg-footer">
      <div class="container mx-auto px-4">
        <div class="relative flex justify-between flex-wrap py-12 md:flex-nowrap gap-16">
          <div class="flex flex-col md:w-1/3 gap-4">
            <div>
              <img class="h-8" src="https://assets.pointhub.net/assets/images/logo/white/logo.png" />
            </div>
            <p class="">
              Pointhub adalah Startup Milenial, tetapi bisnis modelnya konvensional. Pointhub membangun teknologi dengan
              sistem Open Source.
            </p>
          </div>
          <div class="flex flex-wrap md:w-2/3 md:flex-nowrap gap-4">
            <div class="w-full flex flex-col md:w-1/3 gap-4">
              <NuxtLink to="/">Beranda</NuxtLink>
              <NuxtLink to="https://dev.pointhub.net">Developer</NuxtLink>
              <!-- <NuxtLink to="/">Marketplace</NuxtLink>
              <NuxtLink to="/">Investor</NuxtLink> -->
            </div>
            <div class="w-full flex flex-col md:w-1/3 gap-4">
              <!-- <NuxtLink to="/">Tentang Kami</NuxtLink>
              <NuxtLink to="/">Bantuan</NuxtLink>
              <NuxtLink to="/">Hubungi Kami</NuxtLink> -->
              <NuxtLink to="/privacy">Kebijakan Privasi</NuxtLink>
              <NuxtLink to="/terms">Syarat & Ketentuan</NuxtLink>
            </div>
            <div class="w-full flex flex-col md:w-1/3 gap-4 md:items-end">
              <p class="text-lg font-bold">We are in Social</p>
              <div class="flex gap-6">
                <a href="https://www.linkedin.com/company/ptbig/" class="i-cib-linkedin"></a>
                <a href="https://www.instagram.com/pointhubnet/" class="i-cib-instagram"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black text-white">
      <div class="flex-1 py-4">
        <h1 class="text-center text-xs">Copyright ©2023-2024 Pointhub. All Right Reserved.</h1>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-footer {
  background-image: url('@/assets/images/footer/background.jpg');
  background-size: cover;
  background-position: center;
  @apply text-white;
}

a {
  @apply text-white hover:text-yellow-400;
}
</style>
