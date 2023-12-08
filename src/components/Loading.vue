<template>
    <div class="loading-container">
        <img class="loading-icon" src="@/assets/icons/loading_icn.svg" alt="">
    </div>
</template>
<style scoped>
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffff;
    opacity: 0.75;
    z-index: 10;
    overflow: hidden;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
}

.loading-icon {
  width: 50px; /* Adjust the width of the loading icon as needed */
  height: 50px; /* Adjust the height of the loading icon as needed */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>