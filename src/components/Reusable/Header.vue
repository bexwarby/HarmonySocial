<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title", "subtitle"],
};
</script>

<style>
.header {
  background: #eeeeee;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 0 0 10px #bbec9f;
  width: 80vw;
  margin: 75px auto 0 auto;
}
</style>