import {fetchComponent, defineAsyncComponent} from "../deps.js";

export const component = {
    install(context){
        context.component("z-reflect", defineAsyncComponent(fetchComponent(import.meta.resolve("./component/reflect.vue"))));
    }
};