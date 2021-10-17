<template>
  <div class="articles">
    <!--  -->
    <div class="article" v-for="article in articles" :key="article.id">
      <!-- Fetch this information from the server -->
      <p class="heading">{{ title }}</p>
      <p>{{ content }}</p>
      <p>Written by {{ firstname }} {{ lastname }}</p>
      <!-- Liek the post -->
      <like-button />
      <!-- Add a comment -->
      <add-comment />
      <!-- Show the full comments list -->
      <comment-list />
    </div>
  </div>
</template>

<script>
/** IMPORTS  */
import LikeButton from "../Reusable/LikeButton.vue";
import CommentList from "../Reusable/CommentList.vue";
import AddComment from "../Reusable/AddComment.vue";

export default {
  name: "SingleArticle",
  components: {
    LikeButton,
    CommentList,
    AddComment,
  },
  data() {
    return {
      title: "reusable baby wipes",
      content:
        "I've taken to cutting up old t-shirts and using them as wipes - amazing!",
      firstname: "Daniel",
      lastname: "Dude",
      articles: [],
    };
  },
  // Methods to display articles
  methods: {
    async openArticles() {
      // assign url and fetch options
      const url =
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/posts&page=1&limit=20";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      // on click, load up to 1 page of 20 articles
      let res = await fetch(url, options);
      let data = await res.json();
      // add 20 articles into the article array to display
      const articleDisplay = {
        title: data.title,
        content: data.content,
        firstname: data.firstname,
        lastname: data.lastname,
      };
      console.log(articleDisplay);
      // push the article into the articles array to display up to 20
      this.articles.push(articleDisplay);
    },
  },
};
</script>

<style scoped>
.articles {
  background-color: rgb(0, 15, 0);
  width: 500px;
  margin: 10px auto;
  padding: 20px;
  color: white;
  border-radius: 10px;
}
.article {
  border-bottom: 6px solid white;
}
.heading {
  font-size: larger;
  font-weight: bold;
  color: #62c262;
}
</style>