<script setup lang="ts">
    import { useZeroBlockStore } from '../../store/zeroblock'
    
    const store = useZeroBlockStore()
</script>

<template>
    <nav class="flex items-center bg-[#00486D] p-3 flex-wrap">
        <div class="p-2 mr-4 inline-flex items-center">
            <h6 class="fill-current h-4 text-white font-serif">{{ store.getZeroBlock }}</h6>
        </div>
    </nav>
</template>
