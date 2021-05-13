<template>
  <Button label="成功按钮" class="p-button-success" />
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
