import { createRouter, createWebHistory } from "vue-router";

import Home from './Views/Home.vue';

import About from "./Views/About.vue";
import Contact from './Views/Contact.vue';
import Login from './Views/Users/Login.vue';
import Join from './Views/Users/Join.vue';
// User-only route
import Profile from './Views/Profile.vue';

// Create router
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home
        {
            path: "/",
            name: "Home",
            component: Home,
            /* children: [
                {
                    path: "/:userId",
                    name: "Home",
                    component: Home,
                }
            ] */
        },
        // About page
        {
            path: "/about",
            name: "About",
            component: About,
        },
        // Profile
        {
            path: "/profile/:id",
            name: "Profile",
            component: Profile,
        },
        // Contact
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
        // Login, Children: create
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/join",
            name: "Join",
            component: Join,
        }
    ]
});
