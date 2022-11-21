<script setup lang="ts">
  import { useDocumentStore } from '../../../../store/document'
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
    
  const store = useDocumentStore()
  const button = ref<string>('Закрыть')
  const title = ref<string>('')
</script>

<template>
    <section>
        <div class="lg:h-10"></div>
        <div
            v-for="item in store.getDocument[store.getActive]" :key="item" 
            class="mx-auto lg:flex flex-col px-8 gap-7"
        >
            <div class="flex">
                <Icon icon="bi:file-earmark-pdf" color="red" width="27" />
                <a :href="`${ item.description }`" class="mt-1 ml-1 font-serif lg:text-xl font-normal">{{ item.title }}</a>
            </div>
        </div>
        <div class="flex px-6">
            <p @click="store.setActive(title)" class="lg:w-[96px] mt-6 text-[#00486D] font-serif lg:text-xl font-normal px-3 py-2 rounded hover:bg-blue-200 hover:cursor-pointer">
                {{ button }}
            </p>
        </div>
    </section>
</template>
