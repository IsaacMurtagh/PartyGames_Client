import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../views/HelloWorld";
import Test from "../views/Test";

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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;