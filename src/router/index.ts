import NotesPage from "@/notes/NotesPage.vue";
import ProjectsPage from "@/projects/ProjectsPage.vue";
import StatsPage from "@/stats/StatsPage.vue";
import Main from "@/views/Main.vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import CheckListPage from "../checklists/CheckListPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
  {
    path: "/checklists",
    name: "checklists",
    component: CheckListPage,
  },
  {
    path: "/notes",
    name: "notes",
    component: NotesPage,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
