<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <div>🚧 正在施工中 🚧</div>
    <img
      src="https://cdn.pixabay.com/photo/2017/12/29/14/14/set-3047723_960_720.jpg"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  margin: 0 auto;
  width: 800px;
}
</style>
