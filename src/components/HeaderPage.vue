<template>
    <div class="fixed inset-x-0 top-[0px] bg-[white] h-[60px] px-[220px] py-2 flex justify-between items-center">
        <div class="flex gap-x-5 items-center">
            <img 
                src="../assets/images/SGroup.jpg" 
                alt=""
                width="48"
                class="cursor-pointer"
                @click="$router.push('/')"
            >
            <p>S-Group | Think difference - Make difference</p>
        </div>
        <div class="flex gap-x-5 items-center">
            <img 
                src="../assets/images/SgroupProfile-09651.jpg" 
                alt=""
                width="40"
                class="rounded-full w-[40px] h-[40px] cursor-pointer"
                @click="$router.push('/detail')"
            >
            |       Phan Thi Thanh Nhan
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();
    
</script>