<template>
  <div>
    <ul>
      <!-- v-for="(comment, index) in comments" -->
      <li>
        <!-- v-for="comment in comments" :key="comment" -->
        <div>
          <slot :comment="comment"></slot>
        </div>
        <!-- slot for like button on comment -->
        <slot>
          <like-button />
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
import LikeButton from "../Reusable/LikeButton.vue";
export default {
  name: "CommentList",
  components: { LikeButton },
  data() {
    return {
      comment: "Love it :-)",
      comments: [],
    };
  },
  async mounted() {
    let res = await fetch(
      "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    let data = res.json();
    /* for (i = 0; i > 20; i++) { */
    this.comment = data.postId.comment;
  },
  /* return data.json; */
  /* }, */
};
</script>

<style>
</style>