/* IMPORTS */
import { createApp } from 'vue';
import App from "../src/App.vue";
import { router } from "./routes";

// create the app
const app = createApp(App)

// use router as Vue router
app.use(router)

// once router is ready, mount the app
router.isReady().then(() => {
    app.mount('#app');
});
