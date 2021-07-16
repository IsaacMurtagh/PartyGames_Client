import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard";
import CreateGame from "../views/CreateGame";
import JoinGame from "../views/JoinGame";
import Config from "../views/Config";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/config",
    name: "Config",
    component: Config,
  },
  {
    path: "/create-game",
    name: "Create a game",
    component: CreateGame,
  },
  {
    path: "/join-game",
    name: "Join a game",
    component: JoinGame,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;