<template>
  <div>
    <div class="container mt-3">
      <div class="jumbotron text-center text-info">
        <h1 class="display-4">World! Movies Store</h1>
        <p class="lead">
          Welcome to Movies Store - Here you can review & browse movies that are
          trending & popular
        </p>
        <hr class="my-4" />
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div class="mt-3 text-center">
        <h3 class="text-warning">Popular Movies</h3>
        <hr class="my-4" />
      </div>
      <div class="row" id="movies">
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
            <div v-else>
              <img src="../assets/img/m1.jpg" alt="medium_cover_image" />
            </div>

            <p style="font-weight: 700">{{ movie.title }}</p>
          </router-link>
          <p style="font-weight: 200">{{ movie.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movies: [],
      };
    },
    mounted() {
      fetch(" https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((data) => (this.movies = data.data.movies))
        .catch((err) => console.log(err.message));
    },
  };
</script>

<style>
  @media (max-width: 574px) {
    #movies {
      text-align: center;
    }
  }
</style>
