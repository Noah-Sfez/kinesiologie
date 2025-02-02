import { createApp } from "vue";
import "./styles/style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "leaflet/dist/leaflet.css";

// Importation des pages (ou lazy-loading si besoin)
import Home from "./pages/Home.vue";
import Kinesiologie from "./pages/Kinesiologie.vue";
import Mentions from "./pages/Mentions.vue";
import About from "./pages/About.vue";
import Temoignages from "./pages/Temoignages.vue";
import Seances from "./pages/Seances.vue";
import Contact from "./pages/Contact.vue";
import Deontologie from "./pages/Deontologie.vue";

const routes = [
    { path: "/", component: Home }, // Page d'accueil
    { path: "/la-kinesiologie", component: Kinesiologie }, // Page de la kinésiologie
    { path: "/mentions-legales", component: Mentions }, // Page des mentions légales
    { path: "/a-propos", component: About }, // Page à propos
    { path: "/temoignages", component: Temoignages }, // Page des témoignages
    { path: "/une-seance", component: Seances }, // Page des séances
    { path: "/contact", component: Contact }, // Page de contact
    { path: "/deontologie", component: Deontologie }, // Page de déontologie
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth", // pour un défilement fluide
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
