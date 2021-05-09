<template>
  <div class="test">123</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

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
  async mounted() {
    // const ret = await axios.get(`${"v1/DailyForeignExchangeRates"}`);
    const ret = await axios.get(
      `${
        document.domain.includes("localhost")
          ? "v1/DailyForeignExchangeRates"
          : "https://openapi.taifex.com.tw/v1/DailyForeignExchangeRates"
      }`
    );

    // const domainIsLocal = document.domain.includes("http://localhost")
    //   ? true
    //   : false;
    // axios
    //   .get(
    //     `${
    //       domainIsLocal
    //         ? "v1/DailyForeignExchangeRates"
    //         : "https://openapi.taifex.com.tw/v1/DailyForeignExchangeRates"
    //     }`
    //   )
    //   .then((response) => (this.info = response));
  },
};
</script>
