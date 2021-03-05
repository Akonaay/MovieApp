<template>
  <div class="container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <router-link to="/" class="btn btn-outline-info rounded-pill"
        >Back</router-link
      >
    </div>
    <div class="mt-3" v-if="movie">
      <div class="row">
        <div class="col-md-4">
          <img
            class="rounded mx-auto border border-5"
            :src="movie.medium_cover_image"
            alt=""
          />
        </div>
        <div class="col-md-5 text-black mt-sm-3">
          <div style="font-weight: 500" class="text-info">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.year }}</p>
            <p>{{ movie.genres[0] }} / {{ movie.genres[1] }}</p>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-start">
              <div>
                <span class="mr-3 ml-1">
                  <i class="fa fa-heart text-warning"></i>
                </span>
                <span class="ml-5" style="font-weight: 700">{{
                  movie.like_count
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div>
                <span>
                  <i class="fa fa-imdb text-warning fa-2x"></i>
                </span>
                <span class="ml-5" style="font-weight: 700">{{
                  movie.rating
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3" id="similar-movies">
          <h3>Similar Movies</h3>
          <div class="row text-md-center">
            <div v-for="movie in movies" :key="movie.id" class="col-md-4 box">
              <h3>{{ movie.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="row">
        <div class="col-md-8">
          <h3>Synopsis</h3>
          <p>{{ movie.description_full }}</p>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["id"],
    data() {
      return {
        movie: null,
        movies: [],
      };
    },
    mounted() {
      fetch(" https://yts.mx/api/v2/movie_details.json?movie_id=" + this.id)
        .then((res) => res.json())
        .then((data) => (this.movie = data.data.movie))
        .catch((err) => console.log(err.message));

      fetch(" https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((data) => (this.movies = data.data.movie))
        .catch((err) => console.log(err.message));
    },
  };
</script>

<style>
  @media (max-width: 1035px) {
    #similar-movies {
      display: none;
    }
  }
</style>
