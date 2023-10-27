import {fetchComponent, defineAsyncComponent} from "../deps.js";

export const component = {
    install(context){
        context.component("x-reflect", defineAsyncComponent(fetchComponent(import.meta.resolve("./component/reflect.vue"))));
    }
};