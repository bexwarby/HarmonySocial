<template>
  <div>
    <Header title="Welcome to the Harmony Community" subtitle="Sign Up Now!" />

    <!-- sign up form -->
    <form @submit.prevent="signUp">
      <!-- first name input -->
      <label for="firstname">First name:</label>
      <input type="text" name="firstname" v-model="firstname" id="firstname" />
      <!-- first name input -->
      <label for="lastname">Surname:</label>
      <input type="text" name="lastname" v-model="lastname" id="lastname" />
      <!-- email address input -->
      <label for="email">Email address:</label>
      <input type="text" name="email" v-model="email" id="email" />
      <!-- Password input -->
      <label for="password">Please choose a password:</label>
      <input type="password" name="password" v-model="password" id="password" />
      <p class="warning"><i>Must include 1 letter and 1 number</i></p>
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    // method to register as a user
    async signUp() {
      // fetch the source data
      let res = await fetch(
        "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          }),
        }
      );
      const data = await res.json();
      if (res.status === 201) {
        /*         localStorage.setItem("user", data); */
        console.log(data);
        this.$router.push("/login");
      }
      // set the new data
      alert("Please log in now");
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
  font-size: large;
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