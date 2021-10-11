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
    likeAdd() {
      // Use fetch to add like to specific article
      /* async likeAdd() {
      const response = await fetch(
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/post/like",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: postId,
        }
      );
      const data = await response.json();
      /*   let newLike = data.postId;
      console.log(newLike); */

      // how do I get the postId??
      this.likeCount += 1;
      /* return data.json();
    }, */
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