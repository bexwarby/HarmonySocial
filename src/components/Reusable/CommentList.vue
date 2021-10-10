<template>
  <div>
    <ul>
      <!-- v-for="(comment, index) in comments" -->
      <li>
        <slot :comment="comment"></slot>
        <!-- slot for like button on comment -->
        <slot> </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      comment: "",
      comments: [],
    };
  },
};
</script>

<style>
</style>