<template>
  <div class="container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>
    <div v-if="post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.desc }}</p>
      <p>~ {{ post.author }}</p>
    </div>
    <div v-else>
      <div class="loading">Loading...</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobDetails",
    props: ["id"],
    data() {
      return {
        post: null,
      };
    },
    mounted() {
      fetch(" http://localhost:5000/posts/" + this.id)
        .then((res) => res.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
  };
</script>

<style></style>
