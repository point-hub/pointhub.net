<template>
  <div class="relative">
    <div class="marketplace-container flex flex-col">
      <div class="container max-w-6xl mx-auto px-16">
        <div class="rounded-8 from-green-700 to-green-500 bg-gradient-to-r px-6 py-8 text-center">
          <h1 class="text-center text-lg font-bold text-yellow-500 md:text-3xl">
            Tidak Menemukan Software
            <span class="text-white">Yang Anda Butuhkan?</span>
          </h1>
          <h1 class="mt-2 text-center text-xs text-white md:text-lg">
            Tidak perlu khawatir! Jelajahi Marketplace kami untuk menemukan Software tersebut!
          </h1>
          <div class="flex justify-center">
            <a
              target="_blank"
              href="https://wa.me/+628113399578"
              class="mt-4 inline-flex items-center rounded-8 bg-white px-3 py-3 text-sm font-bold text-green-600 md:mt-8 md:px-5 md:text-xl"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.marketplace-container::before {
  content: '';
  @apply bg-[#F0FDF4] h-50% w-full top-0 left-0 absolute z-[-1];
}
</style>
