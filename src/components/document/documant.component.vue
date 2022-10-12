<script setup lang="ts">
  import { useDocumentStore } from '../../store/document'
  import { ref } from 'vue';
    
  const store = useDocumentStore()
  const button = ref<String>('Подробнее');
</script>

<template>
    <section>
        <div class="mx-auto px-8">
            <div class="lg:h-72"></div>
            <div class="flex flex-col justify-center lg:w-2/3">
                <div class="lg:w-2/3">
                    <p class="text-[#00486D] font-serif lg:text-6xl font-normal">{{ store.description.title }}</p>
                    <br />
                    <p class="text-[#00486D] font-serif lg:text-2xl font-normal">{{ store.description.description }}</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="lg:h-10"></div>
        <div class="mx-auto lg:flex px-8 gap-14 h-[442px]">
            <div class="flex flex-col w-1/3 bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]">
                <div class="mt-8 ml-8 mb-8 mr-8 w-full">
                    <img src="./image/activities.png">
                    <div class="mt-20 flex flex-col justify-center">
                        <p class="text-[#00486D] font-serif lg:text-xl font-normal">{{ store.activities.description }}</p>
                        <p class="w-3 mt-44 text-[#00486D] font-serif lg:text-xl font-normal hover:text-neutral-900 hover:cursor-pointer">{{ button }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-1/3 bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]">
                <div class="mt-8 ml-8 mb-8 mr-8 w-full">
                    <img src="./image/responsibilities.png">
                    <div class="mt-20 flex flex-col justify-center">
                        <p class="text-[#00486D] font-serif lg:text-xl font-normal">{{ store.responsibilities.description }}</p>
                        <p class="w-3 mt-44 text-[#00486D] font-serif lg:text-xl font-normal hover:text-neutral-900 hover:cursor-pointer">{{ button }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-1/3 bg-[#FFFFFF] border-solid border-t-[1px] border-[#E4ECF0] shadow-[0_24px_24px_rgba(0,72,109,0.2)]">
                <div class="mt-8 ml-8 mb-8 mr-8 w-full">
                    <img src="./image/case.png">
                    <div class="mt-24 flex flex-col justify-center">
                        <p class="text-[#00486D] font-serif lg:text-xl font-normal">{{ store.case.description }}</p>
                        <p class="w-3 mt-44 text-[#00486D] font-serif lg:text-xl font-normal hover:text-neutral-900 hover:cursor-pointer">{{ button }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
