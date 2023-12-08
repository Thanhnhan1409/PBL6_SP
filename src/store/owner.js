import { defineStore } from "pinia";

export const useOwnerStore = defineStore('owner', {
    state: () => {
        owner: []
    },
    getters: {
        getOwner: (state) => state.owner
    },
    actions: {
        addOwner(listOwner) {
            this.owner = listOwner;
        }
    }
});
