<template>
  <div>
    <Header
      title="My profile"
      subtitle="Edit your profile and preferences here"
    />

    <div class="profileDisplay">
      <table>
        <!-- First name -->
        <tr>
          <th>First name</th>
          <td>{{ firstname }}</td>
        </tr>
        <!-- Last name -->
        <tr>
          <th>Last name</th>
          <td>{{ lastname }}</td>
        </tr>
        <!-- Age -->
        <tr>
          <th>Age</th>
          <td>{{ age }}</td>
        </tr>
        <!-- Email -->
        <tr>
          <th>Email address</th>
          <td>{{ email }}</td>
        </tr>
        <!-- Password -->
        <tr>
          <th>Password</th>
          <td>{{ password }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "../components/Reusable/Header.vue";
export default {
  name: "Profile",
  data() {
    return {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      password: "",
    };
  },
  components: {
    Header,
  },
  async mounted() {
    // assign url and fetch options
    const url =
      "https://fsjs-s9-social-network-api.osc-fr1.scalingo.io/user/:id";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `"bearer" + token`,
      },
    };
    let res = await fetch(url, options);
    let data = res.JSON();

    // set profile data :
    // ADD IF ELSE - if age known, print, otherwise outline red
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.age = data.age;
    this.email = data.email;
    this.password = data.password;
  },
};
</script>

<style scoped>
table {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  font-size: larger;
  margin: 30px auto;
  font-weight: 800;
  background-color: rgb(156 197 123 / 80%);
  padding: 20px;
  color: #051c0e;
}
</style>