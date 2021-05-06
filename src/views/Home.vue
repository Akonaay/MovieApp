<template>
  <div>
    <div class="container mt-3">
      <!-- <div class="jumbotron text-center text-info">
        <h1 class="display-4">World! Movies Store</h1>
        <p class="lead">
          Welcome to Movies Store - Here you can review & browse movies that are
          trending & popular
        </p>
        <hr class="my-4" />
      </div> -->

      <movies />
    </div>
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
export default {
  name: "Home",
  components: {
    Movies,
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
