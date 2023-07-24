import {createRouter, createWebHashHistory, fetchComponent} from "../deps.js";

export const route = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        name: "index",
        component: fetchComponent(import.meta.resolve("./page/index.vue"))
    }, {
        path: "/sub",
        name: "sub",
        component: fetchComponent(import.meta.resolve("./page/sub.vue"))
    }, {
        path: "/:catchAll(.*)",
        name: "404",
        component: fetchComponent(import.meta.resolve("./page/404.vue"))
    }]
});