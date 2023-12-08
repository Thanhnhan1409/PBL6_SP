import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: "/",
        //     name: "home",
        //     component: HomeView,
        // },
        {
            path: "/",
            name: "home",
            component: () => import("../components/UploadImage.vue"),
        },
        {
            path: "/data",
            name: "data",
            component: () => import("../components/DataDetect.vue"),
        },
    ],
});


export default router;
