<template>
  <section class="overflow-hidden">
    <div class="clip-container">
      <div class="h-full w-full place-items-center justify-center text-center space-y-4">
        <p class="text-yellow-500 px-6 pt-30 md:(px-0 pt-60 text-4xl) uppercase">
          Solusi Sistem Software Fleksibel & Terintegrasi
        </p>
        <h1 class="font-bold text-white text-4xl md:text-6xl lg:text-8xl">
          Dirancang untuk<br />Bisnis <span id="spin"></span> Anda
        </h1>
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
