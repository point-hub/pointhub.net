<script setup lang="ts">
import { BaseTabGroup, BaseTabList, BaseTab, BaseTabPanels, BaseTabPanel } from '@point-hub/papp'
</script>
<template>
  <section class="bg-[#F0FDF4]">
    <div class="container max-w-6xl mx-auto p-8 lg:p-16">
      <h1 class="text-center text-3xl font-bold text-orange-400 lg:text-5xl lg:pb-16">
        Coba Gratis <span class="text-black">Software Kami!</span>
      </h1>
      <BaseTabGroup as="div" class="lg:grid lg:cols-5 lg:gap-6">
        <BaseTabList
          class="col-span-2 p-4 border-b lg:border-b-none lg:border-r border-r-black flex flex-col overflow-x-auto overflow-y-hidden dark:border-[#191e3a] scrollbar-hidden gap-4 w-full"
        >
          <BaseTab v-slot="{ selected }" as="template" class="">
            <a
              href="javascript:void(0);"
              class="font-medium"
              :class="{
                'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs lg:text-lg text-white outline-none':
                  selected,
                'md:ml-6 text-xs text-center md:text-left lg:text-lg text-black hover:cursor-pointer': !selected
              }"
            >
              Key Performance Indicator
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="">
            <a
              href="javascript:void(0);"
              class="font-medium"
              :class="{
                'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs lg:text-lg text-white outline-none':
                  selected,
                'md:ml-6 text-xs text-center md:text-left lg:text-lg text-black hover:cursor-pointer': !selected
              }"
            >
              Checkin
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="">
            <a
              href="javascript:void(0);"
              class="font-medium"
              :class="{
                'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs lg:text-lg text-white outline-none':
                  selected,
                'md:ml-6 text-xs text-center md:text-left lg:text-lg text-black hover:cursor-pointer': !selected
              }"
            >
              Shift Control
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="">
            <a
              href="javascript:void(0);"
              class="font-medium"
              :class="{
                'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs lg:text-lg text-white outline-none':
                  selected,
                'md:ml-6 text-xs text-center md:text-left lg:text-lg text-black hover:cursor-pointer': !selected
              }"
            >
              Sales Visitation
            </a>
          </BaseTab>
        </BaseTabList>
        <BaseTabPanels class="col-span-3 text-sm p-4">
          <!-- Key Performance Indicator -->
          <BaseTabPanel class="flex flex-col gap-4">
            <h1 class="text-center text-lg font-bold text-black md:text-left lg:text-3xl">Key Performance Indicator</h1>
            <p class="text-center text-sm font-bold text-green-700 md:text-left lg:text-lg">
              Pastikan biaya gaji anda dibayarkan untuk orang yang tepat!
            </p>
            <p class="text-center text-xs text-gray-5 md:text-left md:text-sm">
              Hargai individu sesuai dengan prestasinya dengan Software KPI kami. Laporan kinerja karyawan dapat dibuat
              dengan cepat dan tepat. Lacak kemajuan dan kualitas tim anda dengan akurat.
            </p>
            <div class="grid cols-3 gap-4">
              <img src="@/assets/images/home/product-kpi-1.jpg" alt="" />
              <img src="@/assets/images/home/product-kpi-2.png" alt="" />
              <img src="@/assets/images/home/product-kpi-3.png" alt="" />
            </div>
            <div class="mx-auto mt-8">
              <a
                target="_blank"
                href="https://wa.me/+628113399578"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </a>
            </div>
          </BaseTabPanel>
          <!-- Checkin -->
          <BaseTabPanel class="flex flex-col gap-4">
            <h1 class="text-center text-lg font-bold text-black md:text-left lg:text-3xl">Checkin</h1>
            <p class="text-center text-sm font-bold text-green-700 md:text-left lg:text-lg">
              Absensi praktis tanpa ribet memasang alat!
            </p>
            <p class="text-center text-xs text-gray-5 md:text-left md:text-sm">
              Software Absen Check in terkini bagi pekerja kantor maupun pekerja remote. Teknologi geolokasi Point
              memastikan identifikasi karyawan secara akurat, dan meminimalkan praktik absensi palsu.
            </p>
            <div class="grid cols-3 gap-4">
              <img src="@/assets/images/home/product-checkin-1.png" alt="" />
              <img src="@/assets/images/home/product-checkin-2.png" alt="" />
              <img src="@/assets/images/home/product-checkin-3.png" alt="" />
            </div>
            <div class="mx-auto mt-8">
              <a
                target="_blank"
                href="https://wa.me/+628113399578"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </a>
            </div>
          </BaseTabPanel>
          <!-- Absensi -->
          <BaseTabPanel class="flex flex-col gap-4">
            <h1 class="text-center text-lg font-bold text-black md:text-left lg:text-3xl">Shift Control</h1>
            <p class="text-center text-sm font-bold text-green-700 md:text-left lg:text-lg">
              Perlu memantau jadwal shift karyawan antar cabang dengan mudah?
            </p>
            <p class="text-center text-xs text-gray-5 md:text-left md:text-sm">
              Otomatisasi penjadwalan shift karyawan, pantauan absensi real-time, dan integrasi sistem yang memudahkan
              anda memantau beberapa cabang usaha sekaligus
            </p>
            <div class="grid cols-3 gap-4">
              <img src="@/assets/images/home/product-shift-control-1.png" alt="" />
              <img src="@/assets/images/home/product-shift-control-2.png" alt="" />
              <img src="@/assets/images/home/product-shift-control-3.png" alt="" />
            </div>
            <div class="mx-auto mt-8">
              <a
                target="_blank"
                href="https://wa.me/+628113399578"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </a>
            </div>
          </BaseTabPanel>
          <!-- Sales Visitation -->
          <BaseTabPanel class="flex flex-col gap-4">
            <h1 class="text-center text-lg font-bold text-black md:text-left lg:text-3xl">Sales Visitation</h1>
            <p class="text-center text-sm font-bold text-green-700 md:text-left lg:text-lg">
              Temukan potensi penjualan tanpa batas dengan software sales visitation kami.
            </p>
            <p class="text-center text-xs text-gray-5 md:text-left md:text-sm">
              Dengan software geolokasi canggih, identifikasi prospek terbaik dengan akurasi tinggi. Tampikan data
              pelanggan potensial berdasarkan lokasi, sehingga anda dapat menyusun strategi penjualan yang tepat
              sasaran. Dengan data kami, analisa dapat dilakukan untuk memahami tren pasar dan menemukan peluang bisnis
              baru. Kluster prospek potensial dan pelanggan terbaik dapat terpetakan, sehingga mengoptimalkan rute
              penjualan.
            </p>
            <div class="grid cols-3 gap-4">
              <img src="@/assets/images/home/product-sales-visitation-1.jpeg" alt="" />
              <img src="@/assets/images/home/product-sales-visitation-2.png" alt="" />
              <img src="@/assets/images/home/product-sales-visitation-3.png" alt="" />
            </div>
            <div class="mx-auto mt-8">
              <a
                target="_blank"
                href="https://wa.me/+628113399578"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </a>
            </div>
          </BaseTabPanel>
        </BaseTabPanels>
      </BaseTabGroup>
    </div>
  </section>
</template>
