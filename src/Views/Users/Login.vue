<template>
  <div>
    <Header title="Sign In" subtitle="Let the eco-magic begin!" />

    <!-- sign up form -->
    <form action="/profile/:id" @submit.prevent="signIn" method="get">
      <!-- email or user name input -->
      <label for="emailUser">Email or username:</label>
      <input type="text" name="emailUser" v-model="emailUser" id="emailUser" />
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
export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      emailUser: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      console.log("signed in");
      alert("You will now be able to comment and like posts");
      // PUSH TO CONNECTED HOME
      this.$router.push("/");
    },
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
  font-size: xx-large;
  margin: 30px auto;
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