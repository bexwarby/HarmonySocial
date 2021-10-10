<template>
  <div class="comment section">
    <form
      action="/article/comment/:id"
      @submit.prevent="addComment"
      method="post"
    >
      <input
        type="text"
        name="comment"
        v-model="comment"
        id="comment"
        placeholder="Leave a comment"
      />
      <button type="submit">Add comment</button>
    </form>

    <slot></slot>
  </div>
  <!-- How would the user then delete or edit their comment? -->
</template>

<script>
export default {
  name: "Comment",
  methods: {
    addComment() {},
  },
};
</script>

<style>
</style>