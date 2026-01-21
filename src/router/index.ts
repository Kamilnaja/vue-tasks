import Main from "@/views/Main.vue";
import Projects from "@/views/Projects.vue";
import Stats from "@/views/Stats.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
    },
  ],
});

export default router;
