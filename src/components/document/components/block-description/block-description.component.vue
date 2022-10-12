<script setup lang="ts">
  import { useDocumentStore } from '../../../../store/document'
    
  const store = useDocumentStore()
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
</template>
