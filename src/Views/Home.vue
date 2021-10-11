<template>
  <div>
    <Header title="Harmony Connections" subtitle="Your home away from home" />

    <!-- PAGE DESCRIPTION -->
    <p class="description">
      Here at Harmony, we invite you to connect with like-minded, eco-friendly
      planet warriors
    </p>

    <!-- BUTTON TO OPEN POSTS LIST -->
    <button class="viewPosts" @click="openPosts">{{ postsButton }}</button>

    <!-- ONLY DISPLAY IF CONNECTED -->
    <PostArticle />

    <!-- ONLY DISPLAY IF OpenPosts BUTTON CLICKED -->
    <single-article v-if="clicked" />
  </div>
</template>

<script>
/* IMPORTS */
import Header from "../components/Reusable/Header.vue";
import PostArticle from "../components/Reusable/PostArticle.vue";
import SingleArticle from "../components/Reusable/SingleArticle.vue";

export default {
  name: "About",
  components: {
    Header,
    PostArticle,
    SingleArticle,
  },
  data() {
    return {
      clicked: false,
      postsButton: "Click here to read recent posts",
    };
  },
  methods: {
    openPosts() {
      this.clicked = true;
    },
  },
};
</script>

<style>
.description {
  background-color: #62c262;
  height: 30px;
  color: #010b01;
  font-weight: bold;
  padding: 5px;
  font-style: italic;
}
.viewPosts {
  background-color: aliceblue;
  width: 400px;
  height: 40px;
  font-size: initial;
  font-weight: 700;
}
</style>
