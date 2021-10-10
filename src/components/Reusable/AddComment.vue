<template>
  <div class="commentSection">

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

    
  </div>
  <!-- How would the user then delete or edit their comment? -->
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comment: ""
    }
  },
  methods: {
    addComment() {
      console.log("comment added")
    },
  },
};
</script>

<style scoped>
form {
  width: 300px
}
form button {
  background-color: #62c262;
  font-size: large;
  font-weight: bold;
  color: #000f00;
}
form input {
  font-size: smaller;
}

</style>