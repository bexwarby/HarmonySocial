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
      {{ count }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LikeButton",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    // need to assign comment and user ID to the like clicked
    /* commentID: "",
    userID: "", */
  },
  // Methods with
  methods: {
    // Use fetch to add like to specific article
    likeAdd() {
      this.count += 1;
      console.log("like added");
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
    height: 25px
  }
</style>