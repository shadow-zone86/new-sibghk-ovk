<script setup lang="ts">
  import { useNewsStore } from '../../../../store/news'
  import { ref, onMounted } from 'vue'
    
  const store = useNewsStore()
  const getNewsInfo = () => {
    return store.getNews[store.getActive]
  }
  const setNews = (click:number) => {
    store.setActive(click)
    return
  }
  const title = ref<string>('description')
  onMounted(store.setLastActive)
</script>

<template>
    <section id="news">
        <div class="mx-auto lg:flex mt-40 ml-52 px-8">
            <div class="flex flex-col justify-center lg:w-1/5">
                <div class="w-full">
                    <img @click="setNews(0)" class="hover:cursor-pointer" src="/custom_apps/siteovk/images/news/arrow_left.png">
                </div>
            </div>
            <div class="flex flex-col justify-center lg:w-3/5 mr-60">
                <div class="w-full">
                    <p @click="store.setActiveDescription(title)" class="text-[#00486D] font-serif lg:text-2xl font-normal hover:cursor-pointer hover:text-[#000000]">
                        {{ getNewsInfo().title }}
                    </p>
                    <p class="text-[#00486D] font-serif lg:text-1xl font-normal italic mt-8">{{ getNewsInfo().date }}</p>
                </div>
            </div>
            <div class="flex flex-col justify-center lg:w-1/5">
                <div class="w-full">
                    <img @click="setNews(1)" class="hover:cursor-pointer" src="/custom_apps/siteovk/images/news/arrow_right.png">
                </div>
            </div>
        </div>
    </section>
</template>