<script setup lang="ts">
  import { useNewsStore } from '../../../../store/news'
  import { ref } from 'vue'
    
  const store = useNewsStore()
  const getNewsDescription = () => {
    return store.getNews[store.getActive].description
  }
  const button = ref<string>('Закрыть')
  const title = ref<string>('')
</script>

<template>
    <section class="ml-52 mr-52 mb-40">
        <div class="lg:h-10"></div>
        <div class="mx-auto lg:flex flex-col px-8 gap-7">
            <div class="flex">
                <p class="mt-1 ml-1 font-serif lg:text-xl font-normal">{{ getNewsDescription() }}</p>
            </div>
        </div>
        <div class="flex px-6">
            <p @click="store.setActiveDescription(title)" class="lg:w-[96px] mt-6 text-[#00486D] font-serif lg:text-xl font-normal px-3 py-2 rounded hover:bg-blue-200 hover:cursor-pointer">
                {{ button }}
            </p>
        </div>
    </section>
</template>
