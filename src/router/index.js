import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUpPage.vue";


const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/signup",
        name:"signup",
        component: SignUp,
    }
   
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
