<script setup lang="ts">
    import { ref } from 'vue';
    import Menu from '../interface/Menu'
    
    const showMenu = ref<Boolean>(false);
    const mainMenu = ref<Menu>(
        { about: 'О нас', document: 'Документы', management: 'Руководство', news: 'Новости', employees: 'Сотрудники' }
    )
</script>

<template>
    <nav class="flex items-center bg-[#F2F6F7] p-3 flex-wrap">
      <div class="p-2 mr-4 inline-flex items-center">
        <div class="bg-[url('./assets/app/logo.png')] bg-[length:70px_40px] fill-current h-8 w-12 mr-2"></div>
      </div>
      <div class="tham tham-e-squeeze tham-w-6 lg:hidden ml-auto" :class="(showMenu) ? 'tham' : 'tham-active'" @click="showMenu = !showMenu">
        <div class="tham-box">
          <div class="tham-inner bg-[#00486D]"></div>
        </div>
      </div>
      <div class="top-nav w-top lg:inline-flex lg:flex-grow lg-w-auto" :class="(showMenu) ? 'hidden' : 'tiggle'">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ mainMenu.about }}</span>
          </a>
          <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ mainMenu.document }}</span>
          </a>
          <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ mainMenu.management }}</span>
          </a>
          <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ mainMenu.news }}</span>
          </a>
          <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-[#00486D] font-serif font-normal text-xl hover:bg-blue-200">
            <span>{{ mainMenu.employees }}</span>
          </a>
        </div>
      </div>
    </nav>
</template>