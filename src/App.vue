<script setup lang="ts">
  import ZeroBlock from './components/zero-block/index'
  import NavBar from './components/navbar/index'
  import About from './components/about/index'
  import Document from './components/document/index'
  import Management from './components/management/index'
  import News from './components/news/index'
  import Worker from './components/worker/index'
  import Foter from './components/footer/index'
</script>

<template>
  <ZeroBlock />
  <NavBar id="navbar" />
  <About id="about" />
  <Document />
  <Management id="management" />
  <News />
  <Worker />
  <Foter />
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>