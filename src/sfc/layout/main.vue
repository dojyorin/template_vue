<template>
    <v-app>
        <x-loading></x-loading>
        <x-notify></x-notify>
        <x-navigation></x-navigation>
        <x-header></x-header>
        <v-main>
            <router-view></router-view>
        </v-main>
        <x-footer></x-footer>
    </v-app>
</template>

<script>
    import {defineComponent, defineAsyncComponent, fetchComponent} from "../../deps.js";

    export default defineComponent({
        components: {
            "x-header": defineAsyncComponent(fetchComponent("./parts/header.vue")),
            "x-footer": defineAsyncComponent(fetchComponent("./parts/footer.vue")),
            "x-loading": defineAsyncComponent(fetchComponent("./parts/loading.vue")),
            "x-notify": defineAsyncComponent(fetchComponent("./parts/notify.vue")),
            "x-navigation": defineAsyncComponent(fetchComponent("./parts/navigation.vue"))
        }
    });
</script>