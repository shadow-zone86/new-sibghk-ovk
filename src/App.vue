<script setup lang="ts">
  import ZeroBlock from './components/zero-block/index'
  import NavBar from './components/navbar/index'
  import About from './components/about/index'
  import Document from './components/document/index'
  import Management from './components/management/index'
  import News from './components/news/index'
  import Worker from './components/worker/index'
  import Foter from './components/footer/index'
  import Panel from './components/panel/index'
  import { usePanelStore } from './store/panel'
  import { onBeforeMount, onBeforeUnmount } from 'vue'

  const store = usePanelStore()
  const onScroll = () => {
    (window.scrollY > 100) ? store.setOnShow(true) : store.setOnShow(false)
  }
  onBeforeMount(() => {
    window.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    window.addEventListener('scroll', onScroll)
  })
</script>

<template>
  <!-- <ZeroBlock /> -->
  <NavBar id="navbar" />
  <About id="about" />
  <Document />
  <Management id="management" />
  <News />
  <Worker />
  <Foter />
  <Panel />
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
  #content {
    background-color: #EFF6FF;
  }
</style>