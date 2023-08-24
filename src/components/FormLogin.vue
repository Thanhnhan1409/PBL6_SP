<template>
    <div class="container w-[500px] mx-auto py-16 border bg-[white] rounded-xl mt-16">
        <h1 class="font-semibold text-xl text-center py-2 mb-4">
            Sign in to your dashboard
        </h1>
        <form action="" class="w-[300px] mx-auto">
            <label for="username" class="">Username</label>
            <div class="relative">
                <img src="../assets/icons/email_icn.svg" alt="" :class="classNameIcon" width="18" />
                <input :class="input__login" type="text" name="" id="username" placeholder="User Name"
                    v-model="username" />
            </div>
            <label for="password">Password</label>
            <div class="relative">
                <input :class="input__login" type="password" name="" id="password" placeholder="Password"
                    v-model="password" />
                <img src="../assets/icons/lock_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-x-2">
                    <input type="checkbox" name="" id="" class="cursor-pointer" />
                    <span class="text-xs font-semibold">Remember me</span>
                </div>
                <p class="text-[#5145E5] text-xs">Forgot your password?</p>
            </div>

            <button class="bg-[#5145E5] font-semibold text-white px-4 py-2 rounded w-full mt-2" @click.prevent="login">
                Sign in
            </button>
            <p class="py-1 mt-4">
                Not register yet?
                <b class="text-[#5145E5] cursor-pointer" @click="$router.push('/register')">Create an account</b>
            </p>
        </form>
    </div>
</template>
<script setup>
import { ref, unref } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store";

const router = useRouter();

const input__login = ref(
    "border rounded p-2 w-full mb-4 mx-auto pl-10 mt-1 mt-2"
);
const classNameIcon = ref("absolute top-[18px] left-[10px]");
const username = ref("");
const password = ref("");
const authStore = useAuthStore();

const login = async () => {
    const isSuccess = await authStore.login(unref(username), unref(password));
    console.log('isSuccess', isSuccess);
    if(isSuccess) {
        notify({
                    title: "Success",
                    text: "Login success",
                    type: "success",
                    duration: 1000,
                });
        router.push({name: 'list-users'})
    } else {
        notify({
            title: "Failed",
            text: "Login error",
            type: "error",
            duration: 1000,
        });
    }
    
};

</script>
