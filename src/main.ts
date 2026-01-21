import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error("Global Error Handler:", err, info);
};

app.use(router);

app.mount("#app");
