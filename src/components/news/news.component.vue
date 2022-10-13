<script setup lang="ts">
  import { useNewsStore } from '../../store/news'
    
  const store = useNewsStore()
  const getNewsTitle = () => {
    return store.getNews[store.getActive].title
  }
  const setNews = (click:number) => {
    store.setActive(click)
    return
  }
</script>

<template>
    <section>
        <div class="mx-auto lg:flex mt-40 ml-52 px-8">
            <div class="flex flex-col justify-center lg:w-1/5">
                <div class="w-full">
                    <img @click="setNews(0)" class="hover:cursor-pointer" src="./images/arrow_left.png">
                </div>
            </div>
            <div class="flex flex-col justify-center lg:w-3/5 mr-60">
                <div class="w-full">
                    <p class="text-[#00486D] font-serif lg:text-2xl font-normal hover:cursor-pointer hover:text-[#000000]">
                        {{ getNewsTitle() }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-center lg:w-1/5">
                <div class="w-full">
                    <img @click="setNews(1)" class="hover:cursor-pointer" src="./images/arrow_right.png">
                </div>
            </div>
        </div>
    </section>
</template>
