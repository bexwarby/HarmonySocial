<template>
  <div>
    <ul>
      <!-- v-for="(comment, index) in comments" -->
      <li>
        <slot :comment="comment"></slot>
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
  components: {LikeButton},
  data() {
    return {
      comment: "Love it :-)",
      comments: [],
    };
  },
};
</script>

<style>
</style>