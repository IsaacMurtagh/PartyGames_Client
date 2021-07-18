import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import CreateGame from '../views/CreateGame'
import JoinGame from '../views/JoinGame'
import GameScreen from '../views/play/GameScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/create-game',
    name: 'CreateGame',
    component: CreateGame
  },
  {
    path: '/join-game',
    name: 'JoinGame',
    component: JoinGame
  },
  {
    path: '/game/:gameId',
    name: 'PlayGame',
    component: GameScreen
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
