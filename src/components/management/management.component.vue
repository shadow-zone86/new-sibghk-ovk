<script setup lang="ts">
  import { useManagementStore } from '../../store/management'
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
    
  const store = useManagementStore()
  const button = ref<string>('Обратная связь')
</script>

<template>
  <section>
    <div class="mx-auto lg:flex mt-80 px-8 bg-blue-50">
        <div class="flex flex-col justify-center lg:w-1/3">
            <div class="lg:w-[499px]">
                <img src="./images/konev.png">
            </div>
        </div>
        <div class="flex flex-col justify-center lg:w-1/3">
            <div class="lg:w-2/3">
                <Icon icon="mingcute:quote-left-fill" color="#00486D" width="46" />
                <p class="mt-8 text-[#00486D] font-serif lg:text-2xl font-normal">{{ store.getDescription.quote }}</p>
            </div>
        </div>
        <div class="flex flex-col justify-center lg:w-1/3 mt-40 bg-[#00486D]">
            <div class="lg:w-2/3">
                <p class="ml-8 text-[#F2F6F7] font-serif lg:text-6xl font-normal">{{ store.getDescription.title }}</p>
                <br />
                <p class="ml-8 text-[#F2F6F7] font-serif lg:text-2xl font-normal">{{ store.getDescription.description }}</p>
                <br />
                <a :href="`${ store.getDescription.url }`" class="ml-8 lg:w-[161px] text-[#00486D] bg-[#F2F6F7] font-serif lg:text-xl font-normal px-3 py-2 rounded hover:bg-blue-200 hover:text-[#000000] hover:cursor-pointer">
                    {{ button }}
                </a>
            </div>
        </div>
    </div>
  </section>
</template>
