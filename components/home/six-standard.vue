<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    contentFirst?: boolean
    bubbleText: string
    title: string
    description: string
    background?: boolean
  }>(),
  {
    background: false,
    contentFirst: true
  }
)

const arrowPosition = ref<'left' | 'right'>('right')
if (props.contentFirst === true) {
  arrowPosition.value = 'left'
}
</script>

<template>
  <section :class="{ 'bg-[#F0FDF4]': background }" class="py-16 lg:px-16">
    <div
      class="flex gap-4 lg:gap-12 items-center justify-center flex-wrap-reverse px-16 lg:px-32 max-w-7xl container mx-auto"
      :class="{ 'flex-row-reverse ': !contentFirst }"
    >
      <div class="lg:flex-1 flex flex-col gap-4">
        <BubbleText :arrow-position="arrowPosition">{{ bubbleText }}</BubbleText>
        <div class="flex items-center">
          <h1 class="text-sm font-bold text-green-700 md:text-xl">{{ title }}</h1>
          <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
        </div>
        <h1 class="text-justify text-xs text-black md:text-sm">
          {{ description }}
        </h1>
      </div>
      <div class="lg:flex-1 flex justify-center">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
