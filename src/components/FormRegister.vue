<template>
    <div class="container w-[700px] mx-auto py-16 border bg-[white] rounded-xl my-16">
        <h1 class="font-semibold text-xl text-center py-2 mb-4 ">
            Register
        </h1>
        <form action="" class="w-[400px] mx-auto">
            <label for="fullname">Full Name</label>
            <div class="relative">
                <input :class="className" type="text" name="" id="fullname" placeholder="Full Name"
                    v-model="user.fullname" />
                <img src="../assets/icons/user_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <label for="emial">Email</label>
            <div class="relative">
                <input :class="className" type="emial" name="" id="emial" placeholder="Emial" v-model="user.email" />
                <img src="../assets/icons/email_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <label for="gender">Gender</label>
            <div class="relative">
                <div class="py-2 px-4 flex justify-around">
                    <label>
                        <input type="radio" v-model="user.gender" value=1 /> Male
                    </label>
                    <label>
                        <input type="radio" v-model="user.gender" value=0 /> Female
                    </label>
                </div>
            </div>
            <label for="age">Age</label>
            <div class="relative">
                <input :class="className" type="number" name="" id="age" placeholder="Age" v-model="user.age" />
                <img src="../assets/icons/lock_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <label for="username" class="">Username</label>
            <div class="relative">
                <img src="../assets/icons/user_icn.svg" alt="" :class="classNameIcon" width="18" />
                <input :class="className" type="text" name="" id="username" placeholder="User Name"
                    v-model="user.username" />
            </div>
            <label for="password">Password</label>
            <div class="relative">
                <input :class="className" type="password" name="" id="password" placeholder="Password"
                    v-model="user.password" />
                <img src="../assets/icons/lock_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <label for="confirmpassword">Confirm Password</label>
            <div class="relative">
                <input :class="className" type="password" name="" id="confirmpassword" placeholder="Confirm Password"
                    v-model="user.confirmPassword" />
                <img src="../assets/icons/lock_icn.svg" alt="" :class="classNameIcon" width="15" />
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-x-2">
                    <input type="checkbox" name="" id="" class="cursor-pointer" />
                    <span class="text-xs font-semibold">Remember me</span>
                </div>
                <p class="text-[#5145E5] text-xs">Forgot your password?</p>
            </div>

            <button class="bg-[#5145E5] font-semibold text-white px-4 py-2 rounded w-full mt-2" @click.prevent="register">
                Register
            </button>
            <p class="py-1 mt-4">
                Do you have account? <b class="text-[#5145E5] cursor-pointer" @click="$router.push('/login')">Login</b>
            </p>
        </form>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";

const router = useRouter();

const className = ref("border rounded p-2 w-full mb-4 mx-auto pl-10 mt-2");
const classNameIcon = ref("absolute top-[15px] left-[10px]");
const user = ref({});
const accessToken = ref(localStorage.getItem('accessToken'));

const register = async () => {
    try {
        await axios.post('http://localhost:3308/auth/register', user.value)
            .then((res) => {
                if (res.data.access_token) {
                    localStorage.setItem('accessToken', JSON.stringify(res.data.access_token));
                    accessToken.value = localStorage.getItem('accessToken');
                }
                notify({
                    title: 'Success',
                    text: 'Register success',
                    type: 'success',
                    duration: 1000
                })
                router.push('/');
            })
    } catch (error) {
        console.log(error);
        notify({
            title: 'Failed',
            text: 'Login error',
            type: 'error',
            duration: 1000
        });
    }

}
</script>
