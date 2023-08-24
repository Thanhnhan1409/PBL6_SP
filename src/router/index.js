import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";
import HomeView from "../views/homeView.vue";
import ListUsers from "../views/listUsers.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: "/",
        //     name: "home",
        //     component: HomeView,
        // },
        {
            path: "/register",
            name: "register",
            component: () => import("../components/FormRegister.vue"),
        },
        {
            path: "/detail",
            name: "user-detail",
            component: () => import("../components/UserInformation.vue"),
        },
        {
            path: "/listUser",
            name: "list-users",
            component: ListUsers,
        },
        {
            path: "/",
            name: "login",
            component: () => import("../components/FormLogin.vue"),
        },
        {
            path: "/login",
            name: "login1",
            component: () => import("../components/FormLogin.vue"),
        },
    ],
});

router.beforeEach((to, from) => {

    const authRouter = useAuthStore();

    const token = authRouter.token;

    if(to.name !== 'login' && !token) return '/login';
    if(to.name === 'login' && token) return '/listUser';
})

export default router;
