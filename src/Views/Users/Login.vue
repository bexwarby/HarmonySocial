<template>
  <div>
    <Header title="Sign In" subtitle="Let the eco-magic begin!" />

    <!-- sign up form -->
    <form @submit.prevent="signIn" method="get">
      <!-- email or user name input -->
      <label for="email">Email address:</label>
      <input type="text" name="email" v-model="email" id="email" />
      <!-- password input -->
      <!-- ADD EYE TOGGLE HERE -->
      <label for="password" class="passLabel">Password:</label>
      <input type="password" name="password" v-model="password" id="password" />
      <!-- submit button -->
      <input type="submit" class="submit" value="Let's go!" />
    </form>

    <div>
      <p>Don't have an account?</p>
      <button @click="signUpNow" class="signUp">Sign up now</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "../../components/Reusable/Header.vue";
/* import { mapMutations } from "vuex";
 */
export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // method to sign in
    async signIn() {
      // assign url and fetch options
      const url =
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `"bearer" + token`,
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      // fetch response
      let res = await fetch(url, options);
      console.log(res);
      // parse the response
      const data = await res.json();
      console.log(data);
      // set the token in local storage
      const token = data.token;
      localStorage.setItem("user-token", token); // store the token in localstorage
      console.log("signed in");

      alert("You will now be able to comment and like posts");
      // PUSH TO CONNECTED HOME
      this.$router.push("/");
    },

    // button to sign up
    signUpNow() {
      console.log("pushed");
      this.$router.push("/join");
    },
  },
};
</script>

<style scoped>
form {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  font-size: x-large;
  margin: 30px auto 0 auto;
  font-weight: bold;
  background-color: rgb(39 81 6 / 60%);
  padding: 30px;
  color: white;
}
form .submit {
  background-color: #b0d8b0;
  font-size: large;
  font-weight: bold;
  color: #043c04;
  margin-top: 20px;
}
form input {
  height: 30px;
  font-size: x-large;
  border-radius: 5px;
}
form .passLabel {
  margin-top: 10px;
}
.signUp {
  height: 40px;
  width: 200px;
  background-color: green;
  color: white;
  font-weight: 800;
  font-size: 20px;
}
</style>