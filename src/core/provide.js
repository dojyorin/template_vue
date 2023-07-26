import {ref, reactive} from "../deps.js";

export const provide = ((arg)=>{
    return {
        install(context){
            for(const [k, v] of Object.entries(arg)){
                context.provide(k, v);
            }
        }
    };
})({
    "g-navigation": ref(false),
    "g-loading": ref(true),
    "g-notifies": reactive([])
});