<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container" style="font-weight: bolder">
        <a class="navbar-brand" href="/"
          ><img src="../assets/app.svg" width="23" />
          <span class="m-2">Showz</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false,
      };
    },
  };
</script>

<style scoped>
  .t-d-none {
    text-decoration: none;
  }
</style>
