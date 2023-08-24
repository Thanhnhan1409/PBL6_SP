<template>
    <div class="bg-[white] py-2 px-4 rounded mt-20 h-full">
        <h2 class="text-center text-xl font-semibold my-8">List User</h2>
        <div>
            <ul class="flex justify-between gap-x-2 text-center bg-[#FFEBCD] rounded-lg py-2">
                <li class="w-1/12">STT</li>
                <li class="w-1/5">Full Name</li>
                <li class="w-1/12">Age</li>
                <li class="w-1/6">Gender</li>
                <li class="w-1/6">Major</li>
                <li class="w-4/12">Email</li>
                <li class="w-1/6">Action</li>
            </ul>
            <div class="max-h-4/6 overflow-auto">
                <UserItem 
                    v-for="(user, index) in listUsers" 
                    :key="index"
                    :user="user"
                    :index="index"
                />
            </div>
            
        </div>
        

    </div>
</template>

<script setup>
    import axios  from 'axios';
    import { ref, onMounted } from 'vue';
    import { notify } from '@kyvg/vue3-notification';
    import { useRouter } from 'vue-router';
    import UserItem from '../components/UserItem.vue'; 
    import { useAuthStore, useUsersStore } from '../store';


    const listUsers = ref([]);
    const router = useRouter();
    const authRouter = useAuthStore();
    const usersRouter = useUsersStore();
    
    const fetchDataListUsers = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${authRouter.token}`;
        try {
            await axios.get(`http://localhost:3308/user`)
                .then((res) => {
                    usersRouter.users = res.data.data;
                    listUsers.value = res.data.data;
                    console.log(listUsers.value);
                })
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                notify({
                        title: "Failed",
                        text: "Invald Token",
                        type: "error",
                        duration: 1000,
                    });
                    router.push('/');
                    localStorage.removeItem('accessToken');
                    console.log("hehehe");
            }
                
        }
    }

    onMounted (() =>
        fetchDataListUsers()
    )

</script>