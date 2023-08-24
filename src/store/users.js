import { defineStore } from "pinia";

export const useUsersStore = defineStore('user', {
    state: () => {
        users: []
    },
    getters: {
        getUsers: (state) => state.users
    },
    actions: {
        addUsers(listUsers) {
            this.users = listUsers;
        }
    }
});
