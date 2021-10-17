<template>
  <div class="commentSection">
    <form @submit.prevent="addComment">
      <input
        type="text"
        name="content"
        v-model="content"
        id="content"
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
      content: "",
    };
  },
  methods: {
    async addComment() {
      // assign url and fetch options
      const url =
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post/comment";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `"bearer" + token`,
        },
        body: JSON.stringify({
          postId: postId,
          content: this.content,
        }),
      };
      let res = await fetch(url, options);
      let data = res.json();
      console.log("comment added: " + this.content + data);
      /* return data.json; */
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