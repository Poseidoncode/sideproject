<template>
  <Button label="成功按钮2" class="p-button-success" />
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:w-48"
          src="/img/store.jpg"
          alt="Man looking at item at a store"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Case study
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Finding customers for your new business</a
        >
        <p class="mt-2 text-gray-500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Dialog from "primevue/dialog";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    // axios
    //   .get("https://tw.rter.info/capi.php")
    //   .then((response) => (this.info = response));
    // axios
    //   .get("https://openapi.taifex.com.tw/swagger.json")
    //   .then((response) => (this.info = response));
  },
};
</script>
