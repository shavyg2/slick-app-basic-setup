import { writable } from "svelte/store";





export const DynamicStore = Symbol.for("dynamic-store")


export const DynamicStoreProvider = {
    provide:DynamicStore,
    useFactory(){
        return writable(null);
    },
    scope:"Transient"
}