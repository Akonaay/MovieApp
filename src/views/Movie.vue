<template>
  <div class="container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <router-link to="/" class="btn btn-outline-info rounded-pill"
        >Back</router-link
      >
    </div>
    <div class="mt-3" v-if="movie">
      <div class="row">
        <div class="col-md-3">
          <img
            class="rounded mx-auto border border-5"
            :src="movie.medium_cover_image"
            alt=""
          />
          <a href="#!" class="btn btn-warning mt-2" style="width: 230px">
            <h4>Download</h4>
          </a>
        </div>
        <div class="col-md-4 text-black mt-sm-3">
          <div style="font-weight: 500" class="text-info">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.year }}</p>
            <p>{{ filterGenres }}</p>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-start">
              <div>
                <span class="mr-3 ml-1">
                  <i class="fa fa-heart text-warning fa-2x"></i>
                </span>
                <span class="ml-5" style="font-weight: 700">{{
                  movie.like_count
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div>
                <span>
                  <i class="fa fa-imdb text-warning fa-3x"></i>
                </span>
                <span class="ml-5" style="font-weight: 700">{{
                  movie.rating
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5" id="similar-movies">
          <div class="row">
            <div
              class="col-md-5"
              v-for="suggestion in suggestions"
              :key="suggestion.id"
              style="margin-right: -30px;margin-left: -5px; height: 180px !important"
            >
              <router-link
                style="text-decoration: none"
                :to="{ name: 'MovieDetails', params: { id: suggestion.id } }"
              >
                <img
                  class="rounded mx-auto border border-5 mb-2"
                  :src="suggestion.medium_cover_image"
                  alt=""
                  style="width: 120px; border: 3px solid !important;"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="row">
        <div class="col-md-8 text-info">
          <h3>Synopsis</h3>
          <p class="text-justify text-black-50">{{ movie.description_full }}</p>
        </div>
        <div class="col-md-4 text-info">
          <h3>Reviews</h3>
          <p>There is no reviews at the moment</p>
        </div>
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
        suggestions: [],
      };
    },
    computed: {
      filterGenres() {
        return this.movie.genres;
      },
    },
    created() {
      fetch(" https://yts.mx/api/v2/movie_details.json?movie_id=" + this.id)
        .then((res) => res.json())
        .then((data) => (this.movie = data.data.movie))
        .catch((err) => console.log(err.message));

      fetch(" https://yts.mx/api/v2/movie_suggestions.json?movie_id=" + this.id)
        .then((res) => res.json())
        .then((data) => (this.suggestions = data.data.movies))
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
