<script setup lang="ts">
  import { useWorkerStore } from '../../../../store/worker'
    
  const store = useWorkerStore()
</script>

<template>
    <section>
        <div class="mx-auto px-8">
            <div class="flex flex-col justify-center lg:w-2/3">
                <div class="lg:w-2/3">
                    <p class="text-[#00486D] font-serif lg:text-6xl font-normal">{{ store.getDescription.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
