  
<template>
  <header>
    <nav>
      <ul>
        <!-- Harmony Logo -->
        <li>
          <img alt="Harmony logo" src="../assets/logo.jpg" />
        </li>
        <!-- Link Home -->
        <li>
          <a><router-link to="/">Home</router-link></a>
        </li>
        <!-- Link About -->
        <li>
          <a><router-link to="/about">About</router-link></a>
        </li>
        <!-- Link Profile -->
        <li>
          <a><router-link to="/profile/:id">Profile</router-link></a>
        </li>
        <!-- Link Contact -->
        <li>
          <a><router-link to="/contact">Contact</router-link></a>
        </li>
        <!-- Link Log in -->
        <li>
          <a><router-link to="/login">Log in</router-link></a>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
body {
  height: 125vh;
  margin-top: 80px;
  padding: 30px;
  background-size: cover;
  font-family: sans-serif;
}
header {
  background-color: rgb(255 255 255);
  color: #0e1d06;
  position: fixed;
  left: 0;
  right: 0;
  top: 5px;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 25px 0 rgb(73 119 77);
}
header * {
  display: inline;
}
header li {
  margin: 20px;
}
header li a {
  color: rgb(61, 97, 22);
  text-decoration: none;
}
header li img {
  height: 60px;
}
</style>