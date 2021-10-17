<template>
  <form>
    <label for="title">Share your tips and thoughts in a post here</label>
    <input
      type="text"
      name="title"
      v-model="title"
      id="title"
      placeholder="Give your post a heading"
      required="true"
    />
    <textarea
      name="content"
      v-model="content"
      id="content"
      cols="20"
      rows="10"
      placeholder="Keep it as short or as long as you like..."
    ></textarea>
    <input type="submit" value="Post" class="submit" />
  </form>
</template>

<script>
export default {
  name: "PostArticle",
  data() {
    return {
      content: "",
      title: "",
    };
  },
  methods: {
    async onSubmit() {
      // assign url and fetch options
      const url = "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `"bearer" + token`,
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
      };
      // fetch reponse
      let res = await fetch(url, options);
      // parse and post the data
      let data = await res.json();
      console.log(data);
    },
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
  font-size: smaller;
  border-radius: 5px;
  margin: 10px;
}
</style>