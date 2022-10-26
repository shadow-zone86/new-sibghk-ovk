<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { usePanelStore } from '../../store/panel'
  import { computed, watch } from 'vue'

  const store = usePanelStore()

  watch(() => store.getOnShow, (currentValue, oldValue) => {})
  const repositoriesMatchingSearchQuery = computed(() => {
    return store.getOnShow
  })
</script>

<template>
  <section class="z-0 w-12 h-[5688px] fixed right-[1.3%] top-0 border-l-[1px] border-[#00486D] border-dotted"></section>
  <a href="#navbar" :class="store.getOnShow ? 'opacity-100' : 'opacity-0'" class="fixed right-12 bottom-16 z-20 bg-black border-none rounded-full pointer text-5xl leading-[48px] w-12 text-white opacity-0">
    <Icon icon="eva:arrow-ios-upward-fill" />
  </a>
</template>
