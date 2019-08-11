import { ContentService } from "./ContentService";
import { DynamicStoreProvider } from "./writable-store";



export let TestProviders = [
    ContentService,
    DynamicStoreProvider,
] as any[];
