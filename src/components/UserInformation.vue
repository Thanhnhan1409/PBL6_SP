<template>
    <div class="bg-[white] rounded-lg mt-20 p-8 h-[77vh] flex">
        <div class="relative w-1/3 h-full">
            <img src="../assets/images/SgroupProfile-09651.jpg" alt="user" class="w-full h-full rounded-lg" />
            <img src="../assets/icons/eidt_icn.svg" alt="" width="18"
                class="absolute right-[10px] top-[10px] cursor-pointer" />
        </div>
        <div class="relative w-2/3 h-full px-8">
            <h2 class="text-xl font-bold text-center">User Detail</h2>
            <ul class="mt-8">
                <li :class="userItemClassName">
                    Full Name: {{ user.fullname }}
                </li>
                <li :class="userItemClassName">
                    User Name: {{ user.username }}
                </li>
                <li :class="userItemClassName">Age: {{ user.age }}</li>
                <li :class="userItemClassName">
                    Email: {{ user.email }}
                </li>
                <li :class="userItemClassName">
                    Gender: {{ user.email ? "Male" : "Female" }}
                </li>
                <li :class="userItemClassName">Major: IT</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useAuthStore } from "../store";

const user = ref({});
const userItemClassName = ref(" px-4 py-2 border-b mt-4");
const authRouter = useAuthStore();


const getUserData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${authRouter.token}`;
    try {
        const response = await axios.get(`http://localhost:3308/user/2`);
        user.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};


onMounted(() => {
    getUserData();
    }
);
</script>
