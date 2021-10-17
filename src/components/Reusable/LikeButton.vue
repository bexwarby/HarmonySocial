<template>
  <div>
    <button
      @click="likeAdd"
      :style="
        liked
          ? 'background-color: 3px solid green;'
          : 'border: 3px solid green;'
      "
    >
      <img alt="like button" src="../../assets/tick.png" />
      {{ likeCount }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LikeButton",
  data() {
    return {
      likeCount: 0,
    };
  },
  // Methods with
  methods: {
    // Use fetch to add like to specific article
    async likeAdd() {
      // assign url and fetch options
      const url =
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post/like";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `"bearer" + token`,
        },
        body: {
          postId: String,
        },
      };
      let res = await fetch(url, options);
      const data = await res.json();

      let newLike = data.postId;
      console.log(newLike);

      this.likeCount += 1;
      return data.json();
    },
  },
  // Computed
  computed: {
    liked() {
      return true;
    },
  },
};
</script>

<style scoped>
img {
  height: 25px;
}
</style>