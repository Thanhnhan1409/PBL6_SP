<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import HeaderPage from "./components/HeaderPage.vue";

</script>

<template>
  <div class="app-container m-auto ">
    <div class="max-w-[900px] mx-auto content">
      <HeaderPage />
      <RouterView />
    </div>
    <Notifications />
  </div>
</template>
<style scoped>
  .app-container {
    min-height: 100vh;
    padding: 20px;
    background-color: rgb(241, 240, 240);
  }
  .content {
    background-color: #ffff;
    padding: 20px 40px;
    border-radius: 20px;
  }
</style>
