import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CheckListPage from "./views/checklists/CheckListPage.vue";
import Main from "./views/Main.vue";
import NotesPage from "./views/notes/NotesPage.vue";
import ProjectsPage from "./views/projects/ProjectsPage.vue";
import StatsPage from "./views/stats/StatsPage.vue";

async function prepareApp() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    console.log(worker);
    console.log("ok");
    return worker.start({
      onUnhandledRequest: "bypass", // Avoids noise for static assets
      serviceWorker: {
        options: {
          scope: "/",
        },
      },
    });
  }
}

// 1. Wait for MSW first
prepareApp().then(() => {
  // 2. ONLY NOW create the app and use the router
  const app = createApp(App);

  app.config.errorHandler = (err, vm, info) => {
    console.error("Global Error Handler:", err, info);
  };

  app.use(router);

  app
    .component("Main", Main)
    .component("ProjectsPage", ProjectsPage)
    .component("CheckListPage", CheckListPage)
    .component("NotesPage", NotesPage)
    .component("StatsPage", StatsPage);

  app.mount("#app");
});
