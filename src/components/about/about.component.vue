<script setup lang="ts">
  import { useAboutStore } from '../../store/about'
    
  const store = useAboutStore()
</script>

<template>
  <section>
    <img class="absolute top-[130px] left-[33px]" src="./image/point-double.png">
    <div class="mx-auto lg:flex px-8 bg-[#E4ECF0]">
      <div class="flex flex-col justify-center lg:w-2/3">
        <div class="lg:w-2/3">
          <p class="text-[#00486D] font-serif lg:text-6xl font-normal">{{ store.description.title }}</p>
          <br />
          <p class="text-[#00486D] font-serif lg:text-2xl font-normal">{{ store.description.description }}</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:bg-[#00486D]">
        <img class="absolute top-[810px] right-[570px]" src="./image/point.png">
        <img class="lg:bottom-0 lg:right-7 opacity-0" src="./image/build.png">
        <img class="lg:absolute lg:top-[200px] lg:right-[100px]" src="./image/build.png">
      </div>
    </div>
  </section>
</template>
