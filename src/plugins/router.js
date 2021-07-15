import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard";
import Test from "../views/Test";
import Config from "../views/Config";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/config",
    name: "Config",
    component: Config,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;