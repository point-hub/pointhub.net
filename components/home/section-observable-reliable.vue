<template>
  <section class="container max-w-6xl mx-auto p-16">
    <div class="flex flex-wrap items-center justify-center gap-16 lg:px-16">
      <div class="lg:flex-1 flex flex-col gap-4">
        <h1 class="font-poppins text-5xl text-stroke text-white text-center -mb-6">OBSERVABLE</h1>
        <BubbleText arrow-position="left">Butuh untuk menarik data?</BubbleText>
        <div class="flex items-center">
          <h1 class="text-sm font-bold text-green-700 md:text-xl">
            Semua data anda dapat ditarik dalam berbagai format dokumen
          </h1>
          <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
        </div>
      </div>
      <div class="lg:flex-1 flex flex-col gap-4">
        <h1 class="font-poppins text-5xl text-stroke text-white text-center -mb-6">RELIABLE</h1>
        <BubbleText arrow-position="right">Menemui kendala saat menggunakan software</BubbleText>
        <div class="flex items-center">
          <h1 class="text-sm font-bold text-green-700 md:text-xl">Tersedia online customer service!</h1>
          <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <a
        target="_blank"
        href="https://wa.me/+628113399578"
        class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
      >
        COBA GRATIS!
      </a>
    </div>
  </section>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px black;
}
</style>
