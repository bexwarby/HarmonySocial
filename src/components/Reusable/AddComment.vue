<template>
  <div class="commentSection">
    <form @submit.prevent="addComment">
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
      comment: "",
    };
  },
  methods: {
    async addComment() {
      let res = await fetch(
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post/comment"
      );
      let data = res.json();
      console.log("comment added: " + this.comment);
      return data.json;
    },
  },
};
</script>

<style scoped>
form {
  width: 300px;
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