<script setup lang="ts">
defineProps<{
  arrowPosition: 'left' | 'right'
}>()
</script>

<template>
  <div class="relative">
    <div
      class="absolute top-1/3 h-10 w-10 rotate-45 transform border-green-600 bg-white"
      :class="{
        'left-0 border-l-[0.5px] border-b-[0.5px] -translate-x-1/2': arrowPosition === 'left',
        'right-0 border-r-[0.5px] border-t-[0.5px] translate-x-1/2': arrowPosition === 'right'
      }"
    />

    <div class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8">
      <h1 class="mx-auto text-left text-sm font-bold text-black md:text-lg">
        <slot></slot>
      </h1>
    </div>
  </div>
</template>
