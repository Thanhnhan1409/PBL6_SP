<template>
    <div class="upload-image-container">
      <loading v-if="isLoading" />
      <h2 class="upload-image-title">Upload Image</h2>
      <p class="upload-image-content">Vui lòng upload hình ảnh 4 mặt sổ đỏ</p>
      <p class="upload-image-description">Chấp nhận định dạng JPG, PNG</p>
      <div class="upload-image-link">
            <div class="link-item">
                <p>Mặt trước</p>
                <input type="file" accept=".jpg, .png"  @input="event => listImages.img_front= event.target.files[0]">
            </div>
            <div class="link-item">
                <p>Mặt trong bên trái</p>
                <input type="file" accept=".jpg, .png"  @input="event => listImages.img_inner_left= event.target.files[0]">
            </div>
            <div class="link-item">
                <p>Mặt trong bên phải</p>
                <input type="file" accept=".jpg, .png" @input="event => listImages.img_inner_right= event.target.files[0]">
            </div>
            <div class="link-item">
                <p>Mặt sau</p>
                <input type="file" accept=".jpg, .png" @input="event => listImages.img_back= event.target.files[0]">
            </div>
        </div>
      <p class="error" v-if="isWarning">Bạn cần upload đủ 4 ảnh.</p>
      <div class="upload-image-address">
        <p>File đã thêm:</p>
        <ul>
          <li v-for="(value, key) in listImages" :key="key" class="address-item">
            <span>
              {{
                key == 'front'
                  ? 'Mặt trước'
                  : key === 'inner_left'
                  ? 'Mặt trong bên trái'
                  : key === 'back'
                  ? 'Mặt sau'
                  : 'Mặt trong bên phải'
              }}:
            </span>
            <span class="link-content">{{ value }}</span>
          </li>
        </ul>
      </div>
      <button @click="test1" class="button-continue">Tiếp tục</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import loading from '@/components/Loading.vue';
  import { uploadImage } from '@/services/image.service.js';
  import { useRouter } from 'vue-router';
  import { useOwnerStore } from '../store';

  const router = useRouter()
  const ownerStore = useOwnerStore()

  const listImages = ref({
    img_front: null,
    img_inner_left: null,
    img_inner_right: null,
    img_back: null
});
  const isLoading = ref(false);
  const isWarning = ref(false);
  
  const handleFileChange = (key, event) => {
    listImages.value[key] = event.target.files[0];
  };
  
  const test1 = async () => {
    try {
      let data = new FormData();
      for (const key in listImages.value) {
        if (listImages.value[key]) {
          data.append(key, listImages.value[key]);
        } else {
        //   isWarning.value = true
        //   return 
        }
      }
      isWarning.value = false
      
    //   data.append('img_front', document.getElementById('front'))
    //   data.append('img_inner_left', document.getElementById('left'))
    //   data.append('img_inner_right', document.getElementById('right'))
    //   data.append('img_back', document.getElementById('back'))


      isLoading.value = true;
      const listData = await uploadImage(data);
      if (listData.status === 200) {
        isLoading.value = false;
        router.push(`/data`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  </script>
<style scoped>
.upload-image-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    margin-top: 30px;
}

.upload-image-link {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.link-item {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgb(72, 70, 70);
    width: 180px;
    position: relative;
    cursor: pointer;
}

.link-item:hover {
    background-color: #3498db;
    color: #ffff;
}
.link-item input {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border: 1px solid black;
}

.upload-image-address {
    text-align: start;
    padding: 50px 200px 0 200px;
}
.address-item {
    padding-left: 20px;
}
.address-item span {
    font-weight: 550;
}
.link-content {
    color: rgb(11, 55, 188);
    padding-left: 20px;
}
.button-continue {
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffff;
    width: 100px;
    text-align: center;
    border-radius: 8px;
    margin: auto;
    box-shadow: -2px 1px 8px 5px;
}
.upload-image-title {
    font-size: 20px;
    font-weight: 550;
}
.error {
    font-size: 12px;
    color: red;
}
</style>
