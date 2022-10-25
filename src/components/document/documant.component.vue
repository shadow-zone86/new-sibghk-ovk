<script setup lang="ts">
  import BlockDescription from './components/block-description/index'
  import BlockTypeDocument from './components/block-type-document/index'
  import BlockDocument from './components/block-document/index'
  import { useDocumentStore } from '../../store/document'

  const store = useDocumentStore()
</script>

<template>
    <BlockDescription />
    <BlockTypeDocument />
    <transition name="fade">
      <BlockDocument v-if="store.getActive" />
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