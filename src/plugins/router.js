import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../views/HelloWorld";
import Test from "../views/Test";
import Config from "../views/Config";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
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