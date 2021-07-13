import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Test from "../components/Test";

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