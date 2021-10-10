<template>
  <div>
    <Header title="Harmony Connections" subtitle="Your home away from home" />
    <p class="description">
      Here at Harmony, we invite you to connect with like-minded, eco-friendly
      planet warriors
    </p>

    <!-- ONLY DISPLAY IF CONNECTED -->
    <PostArticle />
  </div>
</template>

<script>
/* IMPORTS */
import Header from "../components/Reusable/Header.vue";
import PostArticle from "../components/Reusable/PostArticle.vue";

export default {
  name: "About",
  components: {
    Header,
    PostArticle,
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
</style>
