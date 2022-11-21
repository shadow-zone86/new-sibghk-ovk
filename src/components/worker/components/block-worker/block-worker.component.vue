<script setup lang="ts">
  import { useWorkerStore } from '../../../../store/worker'
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
    
  const store = useWorkerStore()
  const button = ref<string>('Задай вопрос')
</script>

<template>
    <section>
        <div class="lg:h-10"></div>
        <div class="mx-auto flex-wrap lg:flex px-8 gap-14 h-[442px] relative z-10">
            <div 
                v-for="item in store.getWorker" :key="item" 
                class="flex w-[31%] bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]"
            >
                <div class="w-1/2">
                    <img class="w-full" :src="`/custom_apps/siteovk/images/worker/${ item.title }.png`" alt="Illustration">
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
                    <!-- <Icon icon="bi:question-circle" color="black" width="20" class="mt-[106px] hover:cursor-help w-8 hover:text-[#00486D]" @mouseenter="store.setToogle(item.title)" @mouseleave="store.setToogle(item.title)" /> -->
                    <img class="w-6 h-6 mt-[106px] hover:cursor-help" :src="`/custom_apps/siteovk/images/worker/question.png`" alt="Illustration" @mouseenter="store.setToogle(item.title)" @mouseleave="store.setToogle(item.title)">
                    <div v-if="store.getQuestionWorker == item.title" v-show="store.getToogle" v-html="item.question" class="bg-gray-600 bg-opacity-80 rounded-sm text-white text-xs font-serif font-normal p-2 absolute mt-[136px] ml-2"></div>
                </div>
                </div>
            </div>
        </div>
        <div class="lg:h-[800px]"></div>
    </section>
</template>
