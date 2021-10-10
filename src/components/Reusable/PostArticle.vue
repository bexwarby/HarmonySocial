<template>
  <form>
    <label for="comment">Share your tips and thoughts in a post here</label>
    <textarea
      name="postArticle"
      v-model="postArticle"
      id="postArticle"
      cols="20"
      rows="10"
    ></textarea>
    <input type="submit" value="Post" class="submit" />
  </form>
</template>

<script>
export default {
  name: "PostArticle",
  data() {
    return {
      postArticle: "",
    };
  },
};
</script>

<style>
form {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  font-size: larger;
  margin: 30px auto;
  font-weight: 800;
  background-color: rgb(156 197 123 / 60%);
  padding: 20px;
  color: #051c0e;
}
form .submit {
  background-color: #50812d;
  font-size: large;
  font-weight: bold;
  color: #eeeeee;
  margin-top: 20px;
}
form input {
  height: 30px;
  font-size: larger;
  border-radius: 5px;
}
</style>