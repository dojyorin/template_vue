<template>
<v-navigation-drawer app temporary v-model="$store.state.ui.drawer">
    <v-toolbar dark :color="$store.state.ui.colorMain" :height="$vuetify.application.top">
        <v-btn icon @click="$store.dispatch('ui/vDrawer', false)">
            <v-icon large>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>Menu</v-toolbar-title>
    </v-toolbar>

    <v-list>
        <template v-for="(page, i) in pages">
            <v-list-item :key="i" :to="page.to">
                <v-list-item-icon>
                    <v-icon>{{page.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{page.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return {
            pages: [{
                title: "Main",
                to: "/",
                icon: "mdi-home"
            }, {
                title: "Sub",
                to: "/sub",
                icon: "mdi-account-circle"
            }, {
                title: "Worker",
                to: "/worker",
                icon: "mdi-memory"
            }]
        };
    }
};
</script>