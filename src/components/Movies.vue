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

        <!-- Filter -->
        <div class="row mt-3 w-800">
          <div class="col-md-3 mt-2">
            <h6 class="text-left" style="font-weight: 600">Genre</h6>
            <select
              class="form-control form-control-sm"
              style="border-width: 2px;padding-top: 3px; padding-bottom: 3px;"
            >
              <option disabled selected>All</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Animation</option>
              <option>Biography</option>
              <option>Comedy</option>
              <option>Crime</option>
              <option>Documentary</option>
              <option>Drama</option>
              <option>Family</option>
              <option>Fantasy</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <h6 class="text-left" style="font-weight: 600">Rating</h6>
            <select
              class="form-control form-control-sm"
              style="border-width: 2px;padding-top: 3px; padding-bottom: 3px;"
            >
              <option disabled selected>All</option>
              <option>9+</option>
              <option>8+</option>
              <option>7+</option>
              <option>6+</option>
              <option>5+</option>
              <option>4+</option>
              <option>3+</option>
              <option>2+</option>
              <option>1+</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <h6 class="text-left" style="font-weight: 600">Year</h6>
            <select
              class="form-control form-control-sm"
              style="border-width: 2px;padding-top: 3px; padding-bottom: 3px;"
            >
              <option disabled selected>All</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2015-2018</option>
              <option>2010-2014</option>
              <option>2000-2009</option>
              <option>1990-1999</option>
              <option>1980-1989</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <h6 class="text-left" style="font-weight: 600">Order By</h6>
            <select
              class="form-control form-control-sm"
              style="border-width: 2px;padding-top: 3px; padding-bottom: 3px;"
            >
              <option disabled selected>Latest</option>
              <option>Oldest</option>
              <option>Featured</option>
              <option>Seeds</option>
              <option>Peers</option>
              <option>Year</option>
              <option>Rating</option>
              <option>Likes</option>
              <option>Downloads</option>
            </select>
          </div>
        </div>
      </div>
      <!-- Pagination Top -->
      <div class="text-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item w-762" :class="[{ disabled: page < 0 }]">
              <a class="page-link" @click="fetchMovies(page--)">Previous</a>
            </li>
            <li class="page-item disabled w-762">
              <a class="page-link">Page {{ page }}</a>
            </li>
            <li class="page-item w-762">
              <a class="page-link" @click="fetchMovies(page++)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Movies list -->
      <div class="row w-767">
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
      <!-- Pagination Bottom -->
      <div class="mt-3 mb-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item w-762" :class="[{ disabled: page < 0 }]">
              <a class="page-link" @click="fetchMovies(page--)">Previous</a>
            </li>
            <li class="page-item disabled w-762">
              <a class="page-link">Page {{ page }}</a>
            </li>
            <li class="page-item w-762">
              <a class="page-link" @click="fetchMovies(page++)">Next</a>
            </li>
          </ul>
        </nav>
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

@media (max-width: 767px) {
  .w-767 {
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 762px) {
  .w-762 {
    width: 33.3%;
  }
}

@media (max-width: 800px) {
  .w-800 {
    display: none;
  }
}
</style>
