<script setup lang="ts"></script>
<template>
  <section class="bg-white">
    <div class="container max-w-6xl mx-auto px-16">
      <div class="flex flex-wrap pt-16 md:flex-nowrap space-y-6 md:pt-16 md:space-x-4 md:space-y-0">
        <div class="relative w-full flex md:w-1/2 md:space-x-4">
          <div class="hidden flex-none md:block">
            <img class="h-10 w-10" src="@/assets/images/home/developer.png" />
          </div>
          <div class="grow flex-col text-center space-y-4 md:text-left">
            <div class="flex items-center">
              <img class="ml-auto mr-4 h-10 w-10 md:hidden" src="@/assets/images/home/developer.png" />
              <h1 class="mr-auto text-3xl font-bold text-black">Developer</h1>
            </div>
            <p class="text-sm text-black">
              Point Kolaborasi adalah platform cloud gratis bagi pengembang untuk membuat aplikasi cloud yang siap
              diterapkan di platform Kami.
            </p>
            <div class="mt-6">
              <p class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</p>
            </div>
          </div>
        </div>
        <div class="relative w-full flex md:w-1/2 md:space-x-4">
          <div class="hidden flex-none md:block">
            <img class="h-10 w-10" src="@/assets/images/home/investor.png" />
          </div>
          <div class="grow flex-col text-center space-y-4 md:text-left">
            <div class="flex text-center">
              <img class="ml-auto mr-4 h-10 w-10 md:hidden" src="@/assets/images/home/investor.png" />
              <h1 class="mr-auto text-3xl font-bold text-black">Investor</h1>
            </div>
            <p class="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="mt-6">
              <router-link :to="'/investor'">
                <p class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
