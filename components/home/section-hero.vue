<template>
  <section class="overflow-hidden bg-[#F0FDF4]">
    <div class="clip-container">
      <div class="h-full w-full place-items-center justify-center text-center space-y-4">
        <p class="text-yellow-500 px-6 pt-30 md:(px-0 pt-60 text-4xl)">
          Solusi Sistem Software Fleksibel & Terintegrasi
        </p>
        <h1 class="font-bold text-white text-4xl md:text-6xl lg:text-8xl">
          Dirancang untuk<br />Bisnis <span id="spin"></span> Anda
        </h1>
        <div class="pt-8">
          <a
            id="hero-cta-button"
            target="_blank"
            href="https://wa.me/+628113399578"
            class="mb-8 mt-8 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white"
          >
            Lihat Software
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clip-container {
  background-image: url('@/assets/images/home/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @apply relative min-h-50vh rounded-b-[50%] -mx-40 md:min-h-100vh;
}

#spin:after {
  content: 'UMKM';
  animation: spin infinite 3s;
}
@keyframes spin {
  0% {
    content: 'UMKM';
  }
  50% {
    content: 'Distribusi';
  }
  75% {
    content: 'Produksi';
  }
}
</style>
