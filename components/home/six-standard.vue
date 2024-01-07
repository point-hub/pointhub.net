<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    contentFirst?: boolean
    bubbleText: string
    title: string
    description: string
  }>(),
  {
    contentFirst: true
  }
)

const arrowPosition = ref('right')
if (props.contentFirst === true) {
  arrowPosition.value = 'left'
}
</script>

<template>
  <section class="container mx-auto px-16">
    <div
      class="flex gap-4 lg:gap-12 items-center justify-center flex-wrap-reverse"
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
