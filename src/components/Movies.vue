<template>
  <div class="">
    <div class="movies-list mt-3">
      <div class="mt-3 mb-3 text-center">
        <h3 class="text-warning">Popular Movies</h3>
        <hr class="my-4" />
        <div class="d-flex justify-content-center">
          <input
            type="text"
            v-model="search"
            class="form-control"
            placeholder="Search for movie"
          />
        </div>
      </div>
      <div class="row" id="movies" v-if="movies.length > 0">
        <div v-for="movie in filterMovies" :key="movie.id" class="col-sm box">
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

            <p style="font-weight: 700">{{ movie.title }}</p>
          </router-link>
          <p style="font-weight: 200">{{ movie.year }}</p>
          <div class="mb-2">
            <button
              v-for="seed in movie.torrents"
              :key="seed.id"
              class="btn btn-outline-dark btn-sm mr-1"
            >
              <router-link
                :to="seed.url"
                target="_blank"
                style="text-decoration: none; font-weight: 600;"
                >{{ seed.quality }}</router-link
              >
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">Loading...</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Movies",
    data() {
      return {
        movies: [],
        search: "",
      };
    },
    computed: {
      filterMovies() {
        return this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(this.search);
        });
      },
    },
    created() {
      fetch(" https://yts.mx/api/v2/list_movies.json?&limit=50")
        .then((res) => res.json())
        .then((data) => (this.movies = data.data.movies))
        .catch((err) => console.log(err.message));
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
