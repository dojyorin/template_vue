<template>
<v-list>
    <v-subheader>List</v-subheader>

    <v-list-item>
        <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>Dialog</v-list-item-title>
            <v-list-item-subtitle>Subtitle</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <vue-dialog persistent maximize :color="$store.state.ui.colorSub" title="Dialog" icon="mdi-information-outline" v-model="dialog">
                <template #activator>
                    <v-btn icon @click.stop="dialog = true">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-text>Contents</v-card-text>
                </v-card>
            </vue-dialog>
        </v-list-item-action>
    </v-list-item>
</v-list>
</template>

<script>
export default {
    components: {
        "vue-dialog": () => $vueLoader("./application/components/dialog.vue")
    },

    data(){
        return {
            dialog: false
        };
    },

    async mounted(){
        this.$store.dispatch("ui/vLoading", true);
        await new Promise(res => setTimeout(res, 1000));
        this.$store.dispatch("ui/vLoading", false);
    }
};
</script>