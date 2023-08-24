<script setup>
  import { ref } from 'vue';
import { RouterView } from 'vue-router';
  import HeaderPage from "./components/HeaderPage.vue";
  import { useCounterStore } from './store';

  const counterStore = useCounterStore();

  const changeNumber = (isPlus) => {
    console.log("dang lam");
    console.log('counterStore',counterStore);
    isPlus? counterStore.increment() : counterStore.decrement()
    console.log("alo alo");
    counterStore.$reset; // reset về giá trị ban đầu khởi tạo trong store
  }

</script>

<template>
  <div class="app-container w-full bg-gray-100 min-h-[100vh] absolute">
    <div class="max-w-[1105px] mx-auto">
      <HeaderPage v-if="$route.name !== 'login' "/>
      <RouterView />
    </div>
    <Notifications />
  </div>
</template>
