import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {
        counterDouble: (state) => {
            return state.count * 2
        }
    },
    actions: {
        increment() {
            this.count++
            console.log(this.count);
        },
        decrement() {
            this.count--
            console.log(this.count);
        },
    },
})

// Hàm patch có thể cập nhật 1 lúc nhiều giá trị