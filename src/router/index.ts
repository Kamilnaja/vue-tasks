import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/projects/ProjectsPage.vue"),
  },
  {
    path: "/checklists",
    name: "checklists",
    component: () => import("@/views/checklists/CheckListPage.vue"),
  },
  {
    path: "/notes",
    name: "notes",
    component: () => import("@/views/notes/NotesPage.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/stats/StatsPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"), // Or just a simple template
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
});

export default router;
