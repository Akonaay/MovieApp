<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container" style="font-weight: bolder">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/app.svg" width="23" />
          <span class="m-2">Cinemax Pro</span>
        </router-link>

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
              <router-link
                to="/"
                style="text-decoration: none; color: rgb(192, 214, 226); font-weight: 700"
                >Home</router-link
              >
            </li>
            <li class="nav-item pl-lg-2">
              <a
                style="text-decoration: none; color: white; font-weight: 600"
                href="#!"
                >Browse</a
              >
            </li>
            <li class="nav-item pl-lg-2">
              <a
                style="text-decoration: none; color: white; font-weight: 600"
                href="#!"
                >Trending</a
              >
            </li>
            <li class="nav-item pl-lg-2">
              <a
                style="text-decoration: none; color: rgb(179, 255, 0); font-weight: 600"
                href="#!"
                >4K</a
              >
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

a {
  text-decoration: none;
}
</style>
