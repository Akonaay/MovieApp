import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
