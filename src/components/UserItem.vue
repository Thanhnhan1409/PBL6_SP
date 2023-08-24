<template>
    <div class="w-full py-2 border rounded-lg my-4" :class="{ 'bg-[#E8E8E8]' : index % 2}">
        <ul class="flex justify-between gap-x-2 text-center ">
            <li class="w-1/12">
                {{ user.id }}
            </li>
            <li class="w-1/5">
                {{ user.fullname }}
            </li>
            <li class="w-1/12">
                {{ user.age }}
            </li>
            <li class="w-1/6">
                {{ user.gender ? 'Male' : 'Female' }}
            </li>
            <li class="w-1/6">
                IT
            </li>
            <li class="w-1/3">
                {{ user.email }}
            </li>
            <li class="w-1/6 flex items-center justify-center gap-x-5">
                <img 
                    src="../assets/icons/eidt_icn.svg" alt="edit user" 
                    class="cursor-pointer"
                    @click="editUser"
                >
                <img 
                    src="../assets/icons/trash_icn.svg" 
                    alt="delete user"  
                    class="cursor-pointer"
                    @click="deleteUser"
                >
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps(['user', 'index']);

</script>