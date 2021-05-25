<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <div>🚧 工事中 🚧</div>
    <div
      class="min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative"
    >
      <div
        class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left"
      >
        <div class="w-full md:w-1/2">
          <div class="mb-10 lg:mb-20"></div>
          <div class="mb-10 md:mb-20 text-gray-600 font-light">
            <h1
              class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10"
            >
              そのようなアプリは<br />
              ない見えますね
            </h1>
            <p>お探しのアプリケーションがなくなったようですね。</p>
            <p>ホームに戻り、再度検索してみてください。</p>
          </div>
          <div class="mb-20 md:mb-0">
            <button
              class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600"
            >
              工事中
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
          <img
            src="https://flipstore.withun.link/images/404.png"
            class="w-64 h-64"
          />
        </div>
      </div>
      <div
        class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"
      ></div>
      <div
        class="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"
      ></div>
    </div>
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
  width: 99vw;
}
</style>
