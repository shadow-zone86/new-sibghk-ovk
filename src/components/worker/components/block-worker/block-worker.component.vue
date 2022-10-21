<script setup lang="ts">
  import { useWorkerStore } from '../../../../store/worker'
  import { ref } from 'vue'
    
  const store = useWorkerStore()
  const button = ref<string>('Задай вопрос')
</script>

<template>
    <section>
        <div class="lg:h-10"></div>
        <div class="mx-auto flex-wrap lg:flex px-8 gap-14 h-[442px]">
            <div 
                v-for="item in store.getWorker" :key="item" 
                class="flex w-[31%] bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]"
            >
                <div class="w-1/2">
                    <img class="w-full" :src="`/images/${ item.title }.png`" alt="Illustration">
                </div>
                <div class="flex flex-col justify-center ml-8 w-1/2">
                    <p class="text-[#00486D] font-serif lg:text-base font-normal px-3 py-2 w-3/4">
                        {{ item.name }}
                    </p>
                    <p class="text-[#00486D] font-serif lg:text-base font-bold px-3 py-2">
                        {{ item.post }}
                    </p>
                    <div class="flex">  
                    <a :href="`${ item.url }`" class="mt-24 w-[138px] text-[#00486D] font-serif lg:text-xl font-normal px-3 py-2 rounded hover:bg-blue-200">
                        {{ button }}
                    </a>
                    <img @mouseenter="store.setToogle(item.title)" @mouseleave="store.setToogle(item.title)" class="mt-20 hover:cursor-help w-8" :src="`/images/question.svg`" alt="Illustration">
                    <div v-if="store.getQuestionWorker == item.title" v-show="store.getToogle" v-html="item.question" class="bg-gray-600 bg-opacity-80 rounded-sm text-white text-xs font-serif font-normal p-2 absolute mt-[136px] ml-2"></div>
                </div>
                </div>
            </div>
        </div>
        <div class="lg:h-[800px]"></div>
    </section>
</template>
