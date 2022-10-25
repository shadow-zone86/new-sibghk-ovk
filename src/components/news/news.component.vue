<script setup lang="ts">
  import BlockTitleNews from './components/block-title-news/index'
  import BlockNews from './components/block-news/index'
  import { useNewsStore } from '../../store/news'
    
  const store = useNewsStore()
</script>

<template>
    <BlockTitleNews />
    <transition name="fade">
        <BlockNews v-if="store.getVisible" />
    </transition>
</template>

<style scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }
</style>