<template>
  <div class="container">
    <div class="movies-list mt-3">
      <div class="mt-3 mb-3 text-center">
        <h3 class="text-dark" style="font-weight: 800; font-size: 30px">
          Cinemax Pro Movies
        </h3>
        <p style="font-weight: 200; font-size: 18px; margin-top: 10px">
          Welcome to Cinemax Pro here you can browse, review movies which a
          currently trending with high quality
        </p>
        <hr class="my-4" />
        <div class="d-flex justify-content-center">
          <input
            type="text"
            v-model="search"
            class="form-control"
            placeholder="Search for movie"
            @change="searchMovie(search)"
          />
        </div>
      </div>
      <div class="">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="[{ disabled: page < 0 }]">
              <a class="page-link" href="#" @click="fetchMovies(page--)"
                >Previous</a
              >
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Page {{ page }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click="fetchMovies(page++)"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="row">
        <div v-for="movie in movies" :key="movie.id" class="col-sm box">
          <router-link
            style="text-decoration: none"
            :to="{ name: 'MovieDetails', params: { id: movie.id } }"
          >
            <div v-if="movie.medium_cover_image">
              <img
                :src="movie.medium_cover_image"
                class="rounded mx-auto border border-5"
                alt="medium_cover_image"
              />
            </div>

            <p style="font-weight: 700">
              {{ movie.title }}
            </p>
          </router-link>
          <p style="font-weight: 200">{{ movie.year }}</p>
          <!-- <div class="mb-2">
            <button
              v-for="seed in movie.torrents"
              :key="seed.id"
              class="btn btn-outline-dark btn-sm mr-1"
            >
              <a href="#!" style="text-decoration: none; font-weight: 600;">{{
                seed.quality
              }}</a>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return {
      movies: [],
      search: "",
      page: 1,
    };
  },

  methods: {
    async fetchMovies(page) {
      page = this.page;
      let page_url = `https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=24&page=${page}`;
      await axios.get(page_url).then((res) => {
        this.movies = res.data.data.movies;
      });
    },

    async searchMovie(title) {
      title = this.search;
      let page_url = `https://yts.mx/api/v2/list_movies.json?query_term=${title}`;
      await axios.get(page_url).then((res) => {
        this.movies = res.data.data.movies;
      });
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<style scoped>
@media (max-width: 571px) {
  .box {
    justify-content: center;
    text-align: center;
  }
}
</style>
