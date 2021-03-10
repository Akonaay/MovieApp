import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '../views/PostDetails.vue'
import MovieDetails from '../views/Movie.vue'
import Hellos from '../views/Hellos.vue'
import Hell from '../views/Hell.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/hellos',
    name: 'Hellos',
    component: Hellos
  },
  {
    path: '/hell/:id',
    name: 'Hell',
    component: Hell,
    props: true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
