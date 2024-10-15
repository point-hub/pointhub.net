<script setup lang="ts">
import { BaseTabGroup, BaseTabList, BaseTab, BaseTabPanels, BaseTabPanel } from '@point-hub/papp'
</script>
<template>
  <section class="bg-gray-100">
    <div class="container max-w-6xl mx-auto p-8 lg:p-16">
      <h1 class="text-center text-2xl font-bold lg:text-4xl pb-16">
        Sudah Dipercaya <span class="text-orange-400">2000+</span> Pemilik Bisnis
      </h1>
      <BaseTabGroup as="div" class="">
        <BaseTabList
          class="flex overflow-x-auto overflow-y-hidden pt-4 border-b border-slate-200 dark:border-[#191e3a] scrollbar-hidden"
        >
          <BaseTab v-slot="{ selected }" as="template" class="flex-1">
            <a
              href="javascript:void(0);"
              class="flex pb-2 px-4 gap-2 items-center font-semibold justify-center text-slate-500 -mb-[1px] !outline-none"
              :class="{ 'border-b-2 !border-slate-500': selected }"
            >
              Accounting
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="flex-1">
            <a
              href="javascript:void(0);"
              class="flex pb-2 px-4 gap-2 items-center font-semibold justify-center text-slate-500 -mb-[1px] !outline-none"
              :class="{ 'border-b-2 !border-slate-500': selected }"
            >
              Sales Visitation
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="flex-1">
            <a
              href="javascript:void(0);"
              class="flex pb-2 px-4 gap-2 items-center font-semibold justify-center text-slate-500 -mb-[1px] !outline-none whitespace-nowrap"
              :class="{ 'border-b-2 !border-slate-500': selected }"
            >
              Checkin
            </a>
          </BaseTab>
          <BaseTab v-slot="{ selected }" as="template" class="flex-1">
            <a
              href="javascript:void(0);"
              class="flex pb-2 px-4 gap-2 items-center font-semibold justify-center text-slate-500 -mb-[1px] !outline-none whitespace-nowrap"
              :class="{ 'border-b-2 !border-slate-500': selected }"
            >
              HCMS
            </a>
          </BaseTab>
        </BaseTabList>
        <BaseTabPanels class="flex-1 text-sm py-16 lg:px-16">
          <BaseTabPanel>
            <div class="lg:grid lg:cols-2">
              <div class="pb-10 lg:pb-0">
                <img class="mx-auto max-h-50 px-8" src="@/assets/images/home/testimony-logo-kopibara.png" />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-xl font-semibold">GMB - Kopibara</p>
                <p class="text-lg font-bold text-green-700">Solusi Pointhub:</p>
                <p class="text-sm text-gray-5">
                  Saya direktur di Kopi Bara dan selama ini menggunakan produk akunting dari Point.
                </p>
                <p class="text-sm text-gray-5">
                  Saya merasa sangat terbantu dalam mengambil keputusan keuangan, karena laporan yang dihasilkan oleh
                  Point sangat komprehensif dan memberikan informasi lengkap mengenai kondisi keuangan perusahaan.
                  Menggunakan Point serasa seperti memiliki penasihat akunting pribadi!
                </p>
              </div>
            </div>
          </BaseTabPanel>
          <BaseTabPanel>
            <div class="lg:grid lg:cols-2">
              <div class="pb-10 lg:pb-0">
                <img class="mx-auto max-h-50 px-8" src="@/assets/images/home/testimony-logo-nusa.jpg" />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-xl font-semibold">PT. Nusa Utama Sejahtera</p>
                <p class="text-lg font-bold text-green-700">Solusi Pointhub:</p>
                <p class="text-sm text-gray-5">
                  Pinpoint sangat membantu kami dalam pengecekan penjualan maupun absensi yang real yang ada di
                  lapangan, sehingga meminimalisir terjadinya penyimpangan yang di lakukan oleh karyawan
                </p>
                <p class="text-sm text-gray-5">
                  Pin point sangat membantu produktifitas kami, terutama tenagakerja yang ada di lapangan, sehingga
                  dapat memperbesar profit perusahaan yang menggunakan jasanya, thx pinpoint sudah menjadi partner kerja
                  kami selama ini
                </p>
              </div>
            </div>
          </BaseTabPanel>
          <BaseTabPanel>
            <div class="lg:grid lg:cols-2">
              <div class="pb-10 lg:pb-0">
                <img class="mx-auto max-h-50 px-8" src="@/assets/images/home/testimony-logo-bumi-ananta.png" />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-xl font-semibold">CV. Bumi Ananta</p>
                <p class="text-lg font-bold text-green-700">Solusi Pointhub:</p>
                <p class="text-sm text-gray-5">Saya Stefani dari CV Bumi Ananta, bergerak di bidang konstruksi</p>
                <p class="text-sm text-gray-5">
                  Saya sudah beberapa kali mencari aplikasi absensi yang cocok untuk keperluan perusahaan saya, tapi
                  belum ada yang sesuai. Waktu itu tidak sengaja membaca ulasan dari google tentang produk absensi
                  Point, yaitu "Checkin" dan sangat menarik sekali. Karena sesuai dengan kebutuhan tim saya yang
                  pekerjaannya sering berada di lapangan sehingga butuh absensi yang bisa memantau lokasi
                </p>
                <p class="text-sm text-gray-5">
                  Checkin ini juga sangat mudah digunakan + ada fitur foto pula. Jadi semakin bisa mendukung keakuratan
                  laporan absensi tim saya di lapangan
                </p>
                <p class="text-sm text-gray-5">
                  Untuk perusahaan yang membutuhkan absensi secara mobile, bisa menggunakan Point Checkin ini karena
                  simple penggunaannya tapi benefitnya besar untuk perusahaan
                </p>
              </div>
            </div>
          </BaseTabPanel>
          <BaseTabPanel>
            <div class="lg:grid lg:cols-2">
              <div class="pb-10 lg:pb-0">
                <img class="mx-auto max-h-50 px-8" src="@/assets/images/home/testimony-logo-blk.jpg" />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-xl font-semibold">CV. Bumi Lautan Kopi</p>
                <p class="text-lg font-bold text-green-700">Solusi Pointhub:</p>
                <p class="text-sm text-gray-5">
                  Saya Dewi dari CV Bumi Lautan Kopi Benefit yg dirasakan setelah menggunakan point:
                </p>
                <div class="text-sm text-gray-5 flex flex-col">
                  <span>1. Pengambilan data cepat</span>
                  <span>2. Mudah diakses</span>
                  <span>
                    3. Penilaian KPI menjadi lebih cepat tidak perlu menunggu data dari yang lain karena ada fitur notes
                    dan comment yg bisa digunakan untuk input data
                  </span>
                </div>
                <p class="text-sm text-gray-5">
                  Proses penilaian KPI bisa dilakukan secara mingguan maupun bulanan. Cara akses juga sangat mudah. Data
                  lama tersimpan sehingga memudahkan untuk melakukan pengecekan data lama apabila diperlukan.
                </p>
              </div>
            </div>
          </BaseTabPanel>
        </BaseTabPanels>
      </BaseTabGroup>
    </div>
  </section>
</template>
