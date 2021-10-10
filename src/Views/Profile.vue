<template>
  <div>
    <Header
      title="My profile"
      subtitle="Edit your profile and preferences here"
    />
  </div>
</template>

<script>
import Header from "../components/Reusable/Header.vue";
export default {
  name: "Profile",
  components: {
    Header,
  },
};
</script>