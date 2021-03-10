<template>
  <div>
    <input type="text" v-model="postText" />

    <div v-for="post in filterPosts" :key="post.id">
      <router-link
        style="text-decoration: none"
        :to="{ name: 'Hell', params: { id: post.id } }"
      >
        {{ post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        postText: "",
        posts: [
          {
            id: 1,
            title: "John",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quas nesciunt? Quibusdam, nam. Vel doloribus, ad reprehenderit reiciendis earum vero, non ea quibusdam repellat quisquam illum libero magnam quam ab.",
          },
          {
            id: 2,
            title: "Said",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quas nesciunt? Quibusdam, nam. Vel doloribus, ad reprehenderit reiciendis earum vero.",
          },
          {
            id: 3,
            title: "Foo",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quas nesciunt? Quibusdam, nam. Vel doloribus, ad reprehenderit reiciendis earum vero, non ea ab.",
          },
        ],
      };
    },
    computed: {
      filterPosts() {
        return this.posts.filter(
          (post) =>
            post.title.includes(this.postText) ||
            post.desc.includes(this.postText),
        );
      },
    },
  };
</script>

<style></style>
