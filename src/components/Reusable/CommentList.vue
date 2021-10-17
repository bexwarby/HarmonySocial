<template>
  <div>
    <ul>
      <!-- v-for="(comment, index) in comments" -->
      <li v-for="comment in comments" :key="comment">
        <!--  -->
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
    // assign url and fetch options
    const url = "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.title,
        content: this.content,
      }),
    };
    // on mounted, fetch posts
    let res = await fetch(url, options);
    let data = res.json();
    // set specific post comments
    this.comment = data.postId.comment;
  },
  /* return data.json; */
  /* }, */
};
</script>

<style>
</style>