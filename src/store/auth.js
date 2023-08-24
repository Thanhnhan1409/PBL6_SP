import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => {
        token: ''
    },
    getters: {
        getToken: (state) => state.token
    },
    actions: {
        async login(username, password) {
            try {
                const result = await axios
                .post("http://localhost:3308/auth/login",{
                    username,
                    password
                })
                if(result.status === 200) {
                    this.token = result.data.access_token;
                }
                return result
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        logout(){
            this.token = null;
        }
    }
})