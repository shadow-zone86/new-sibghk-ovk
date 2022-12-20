<script setup lang="ts">
    import { useFooterStore } from '../../store/footer'
    
    const store = useFooterStore()
</script>

<template>
    <nav class="flex flex-wrap items-center bg-[#00486D] p-3 mt-96">
        <div class="p-2 mr-4 inline-flex items-center">
            <h6 class="fill-current h-4 text-white font-serif">{{ store.getDescription }}</h6>
        </div>
    </nav>
</template>
