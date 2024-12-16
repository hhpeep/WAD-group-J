<template>
  <div id="app">
    <PageHeader />
    <Post v-for="post in allPosts" :key="post.id" :post= "post" class= "post" />
    <PageFooter />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageFooter from "/src/components/Footer.vue"
import PageHeader from "/src/components/Header.vue"
import Post from "/src/components/Posts.vue";
import Posts from "/src/store/index.js";

export default {
  name: "app",
  components: {
      PageHeader,
      PageFooter,
      Post,
    },
  created() {
    this.Posts = Posts.posts;
  },
  computed: {
    ...mapGetters(['allPosts']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

