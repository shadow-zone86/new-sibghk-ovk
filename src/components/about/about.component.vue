<script setup lang="ts">
  import { useAboutStore } from '../../store/about'
    
  const store = useAboutStore()
</script>

<template>
  <section class="mb-96">
    <img class="absolute top-[70px] left-[33px] xl:opacity-100 opacity-0" src="/custom_apps/siteovk/images/about/point-double.png">
    <div class="mx-auto lg:flex px-8 bg-[#E4ECF0]">
      <div class="flex flex-col justify-center xl:w-2/3 lg:w-3/4">
        <div class="xl:w-2/3 lg:w-3/4">
          <p class="text-[#00486D] font-serif sm:text-6xl text-4xl font-normal">{{ store.description.title }}</p>
          <br />
          <p class="text-[#00486D] font-serif text-2xl font-normal">{{ store.description.description }}</p>
        </div>
      </div>
      <div class="xl:w-1/3 lg:w-1/4 lg:bg-[#00486D]">
        <img class="my-point absolute 2xl:top-[750px] 2xl:right-[570px] xl:top-[540px] xl:right-[400px] xl:opacity-100 3xl:opacity-100 2lg:opacity-0 opacity-0" src="/custom_apps/siteovk/images/about/point.png">
        <img class="bottom-0 right-7 lg:opacity-0 opacity-100" src="/custom_apps/siteovk/images/about/build.png">
        <img class="absolute lg:top-[140px] lg:right-[100px] lg:w-80 xl:w-[33.5%] lg:opacity-100 opacity-0" src="/custom_apps/siteovk/images/about/build.png">
      </div>
    </div>
  </section>
</template>
