<script setup lang="ts">
    import { ref } from 'vue';
    import { useNavbarStore } from '../../store/navbar'
    
    const showMenu = ref<boolean>(false);
    const store = useNavbarStore()
</script>

<template>
    <nav class="flex items-center bg-[#F2F6F7] p-3 flex-wrap relative z-10">
      <div class="p-2 mr-4 inline-flex items-center">
        <a href="/" class="absolute lg:w-44 w-24"><img src="/images/logo.png"></a>
      </div>
      <div class="tham tham-e-squeeze tham-w-6 lg:hidden ml-auto" :class="(showMenu) ? 'tham' : 'tham-active'" @click="showMenu = !showMenu">
        <div class="tham-box">
          <div class="tham-inner bg-[#00486D]"></div>
        </div>
      </div>
      <div class="top-nav w-top lg:inline-flex lg:flex-grow lg-w-auto mr-2" :class="(showMenu) ? 'hidden' : 'tiggle'">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <a href="#about" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ store.getMainMenu.about }}</span>
          </a>
          <a href="#document" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ store.getMainMenu.document }}</span>
          </a>
          <a href="#management" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ store.getMainMenu.management }}</span>
          </a>
          <a href="#news" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ store.getMainMenu.news }}</span>
          </a>
          <a href="#worker" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ store.getMainMenu.employees }}</span>
          </a>
        </div>
      </div>
    </nav>
</template>