<template>
  <div class="article">

    <!-- Fetch this information from the server -->
    <p class="heading">{{heading}}</p>
    <p>{{postArticle}}</p>
    <p>Written by {{author}} on {{dateWritten}}</p>
    <!-- Add a comment -->
    <add-comment />
    <!-- Liek the post -->
    <like-button />
    <!-- Show the full comments list -->
    <comment-list />

  </div>
</template>

<script>
/** IMPORTS  */
import LikeButton from "../Reusable/LikeButton.vue";
import CommentList from "../Reusable/CommentList.vue"
import AddComment from "../Reusable/AddComment.vue";

export default {
    name: "SingleArticle",
    components: {
        LikeButton,
        CommentList,
        AddComment
    },
    data() {
        return {
            heading: "reusable baby wipes",
            postArticle: "I've taken to cutting up old t-shirts and using them as wipes - amazing!",
            author: "Daniel",
            dateWritten: new Date,
        }
    }

}
</script>

<style scoped>
    .article {
        border-bottom: 6px solid white
    }
    .heading {
        font-size: larger;
        font-weight: bold;
        color: #62c262;
    }
</style>