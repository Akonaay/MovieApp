<template>
  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="movie in collection.movies" :key="movie.id">
        <div class="box">
          <img :src="movie.medium_cover_image" alt="" />
          <h4>{{ movie.title }}</h4>
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
        collection: [],
      };
    },
    created: async function() {
      let response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?&limit=30",
      );
      this.collection = response.data.data;
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
