<script setup lang="ts">
  import { useDocumentStore } from '../../../../store/document'
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
    
  const store = useDocumentStore()
  const button = ref<string>('Подробнее')
</script>

<template>
    <section>
        <div class="lg:h-10"></div>
        <div class="mx-auto lg:flex px-8 gap-14 h-[442px] relative z-10">
            <div 
                v-for="item in store.getTypeDocument" :key="item" 
                class="flex flex-col w-1/3 bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]"
            >
                <div class="mt-8 ml-8 mb-8 mr-8 w-full">
                    <div class="h-16">
                        <!-- <Icon :icon="`${ item.data }`" color="#00486D" width="56" /> -->
                        <img :src="`/custom_apps/siteovk/images/document/${ item.title }.png`" alt="Illustration">
                    </div>
                    <div class="mt-20 flex flex-col justify-center">
                        <p class="text-[#00486D] font-serif lg:text-xl font-normal">
                            {{ item.description }}
                        </p>
                        <p @click="store.setActive(item.title)" class="lg:w-[118px] mt-44 text-[#00486D] font-serif lg:text-xl font-normal px-3 py-2 rounded hover:bg-blue-200 hover:cursor-pointer">
                            {{ button }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
