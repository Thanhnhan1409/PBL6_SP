<template>
    <div class="header-container">
        <h1 class="header-container-title">Số hóa sổ đỏ</h1>
        <p>Vui lòng lần lượt upload ảnh, chỉnh sửa thông tin và xác nhận thông tin</p>
        <div class="timeline">
            <div class="line" :style="{ backgroundColor: activePoint === 1 ? '#3498db' : 'rgb(193, 193, 193)' }"></div>
            <div class="point" :class="{ active: activePoint === 1 }" @click="setActivePoint(1)">
            <img src="../assets/icons/upload_icn.svg" alt=""></div>
            <div class="line" :style="{ backgroundColor: activePoint === 1 ? '#3498db' : 'rgb(193, 193, 193)' }"></div>
            <div class="point" :class="{ active: activePoint === 2 }" @click="setActivePoint(2)">
                <img src="../assets/icons/check_icn.svg" alt="" width="30">
            </div>
            <div class="line" :style="{ backgroundColor: activePoint === 2 ? '#3498db' : 'rgb(193, 193, 193)' }"></div>
            <div class="point" :class="{ active: activePoint === 3 }" @click="setActivePoint(3)">
                <img src="../assets/icons/plus_icn.svg" alt="" width="30">
            </div>
            <div class="line" :style="{ backgroundColor: activePoint === 3 ? '#3498db' : 'rgb(193, 193, 193)' }"></div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    const props = defineProps(['activePoint'])
    const router = useRouter();
    
</script>
<style scoped>
.header-container {
    text-align: center;
    margin-top : 20px;
}
.header-container-title {
    font-size: 35px;
    font-weight: 600;
}
.timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 50px auto;
}

.point {
  width: 50px;
  box-sizing: border-box;
  padding: 10px;
  height: 50px;
  background-color: #3498db; /* Màu sắc của các điểm trên timeline */
  border-radius: 50%;
  cursor: pointer;
}

.point img {
    fill: #ffff;
}
.line {
  height: 4px;
  flex-grow: 1;
  background-color: rgb(249, 249, 249); /* Màu sắc mặc định của đường nối */
}
</style>