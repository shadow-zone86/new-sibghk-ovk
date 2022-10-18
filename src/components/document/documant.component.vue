<script setup lang="ts">
  import BlockDescription from './components/block-description/index'
  import BlockTypeDocument from './components/block-type-document/index'
  import BlockDocument from './components/block-document/index'
  import { useDocumentStore } from '../../store/document'

  const store = useDocumentStore()
</script>

<template>
    <BlockDescription id="document" />
    <BlockTypeDocument />
    <BlockDocument v-if="store.getActive" />
</template>
