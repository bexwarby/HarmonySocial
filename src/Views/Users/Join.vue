<template>
  <div>
    <Header title="Welcome to the Harmony Community" subtitle="Sign Up Now!" />

    <!-- sign up form -->
    <form action="/profile/:newUserId" @submit.prevent="signUp" method="post">
      <!-- user name input -->
      <label for="fullName">Full name:</label>
      <input type="text" name="fullName" v-model="fullName" id="fullName" />
      <!-- date of birth input -->
      <label for="dob">Date of birth:</label>
      <input type="date" name="dob" v-model="dob" id="dob" />
      <!-- email address input -->
      <label for="userEmail">Email address:</label>
      <input type="text" name="userEmail" v-model="userEmail" id="userEmail" />
      <!-- user name input -->
      <label for="username">Your username:</label>
      <input type="text" name="username" v-model="username" id="username" />
      <!-- Password input -->
      <label for="password">Please choose a password:</label>
      <input type="password" name="password" v-model="password" id="password" />
      <p class="warning"><i>Must include 1 letter and 1 number</i></p>
      <!-- Password repeat input -->
      <label for="password2">Repeat the password:</label>
      <input
        type="password"
        name="password2"
        v-model="password2"
        id="password2"
      />
      <!-- submit button -->
      <input type="submit" value="Let's go!" class="button" />
    </form>
  </div>
</template>

<script>
import Header from "../../components/Reusable/Header.vue";
export default {
  name: "Join",
  components: {
    Header,
  },
  data() {
    return {
      fullName: "",
      dob: "",
      userEmail: "",
      username: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    signUp() {
      console.log(this.fullName, this.dob, this.userEmail, this.username);

      alert("Please log in now");
      this.$router.push("/login");
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
  font-size: larger;
  margin: 40px auto;
  font-weight: bold;
  background-color: rgb(39 81 6 / 60%);
  padding: 30px;
  color: white;
}
form .submit {
  margin-top: 20px;
  height: 30px;
  font-size: large;
  background-color: #f0f0f0;
  color: #022507;
  box-shadow: 2px 2px 1px beige;
}
form input {
  height: 30px;
  font-size: x-large;
  border-radius: 5px;
}
form label {
  margin-top: 5px;
}
form .warning {
  margin: 0;
  color: rgb(240, 233, 233);
  font-size: smaller;
  background-color: red;
}
form .button {
  background-color: #b0d8b0;
  font-size: inherit;
  font-weight: bold;
  color: #043c04;
  margin-top: 10px;
}
</style>