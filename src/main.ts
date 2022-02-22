import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { messages, defaultLocale } from "./i18n";
import router from "./router";

const app = createApp(App);
export const i18n = createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

app.use(router);
app.use(i18n);

app.mount("#app");
