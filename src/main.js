/* IMPORTS */
import { createApp } from 'vue';
import App from "../src/App.vue";
import { router } from "./routes";
/* import Vuex from "vuex"; */

// create the app using store in vuex   
const app = createApp(App);

// use router as Vue router
app.use(router)

// use vuex to store state
/* app.use(Vuex)
// create vuex store:
export default new Vuex.Store({
    state: {
        userId: null,
        token: null,
    },
    mutations: {
        setUser(state, user) {
            state.userId = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {},
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
}); */

// once router is ready, mount the app
router.isReady().then(() => {
    app.mount('#app');
});
