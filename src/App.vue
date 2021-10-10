<template>
  <div id="app" :style="image">
    <!-- Display the nav bar -->
    <Nav />
    <!-- Import the router -->
    <router-view></router-view>
    <!-- Display the footer -->
    <Footer />
  </div>
</template>

<script>
/** Imports */
import Nav from "./components/Nav.vue";
import Footer from "./components/Reusable/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557842458-ab4b8925e3cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80)",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-repeat: round;
  height: 700px;
}
</style>
