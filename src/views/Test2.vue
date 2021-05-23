<template>
  <div class="test">123456</div>
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
    // const domainIsLocal = document.domain.includes("localhost");
    // const ret = await axios.get(`${"v1/DailyForeignExchangeRates"}`);
    // const ret = await axios.get(
    //   `${
    //     domainIsLocal
    //       ? "v1/DailyForeignExchangeRates"
    //       : "https://openapi.taifex.com.tw/v1/DailyForeignExchangeRates"
    //   }`
    // );
    // const ret2 = await axios.get(
    //   `${
    //     domainIsLocal
    //       ? "v1/STFTop10"
    //       : "https://openapi.taifex.com.tw/v1/STFTop10"
    //   }`
    // );
    // const ret3 = await axios.get(
    //   `${
    //     domainIsLocal
    //       ? "api/getCategory.jsp?ex=tse&i=01&_=1620578195652"
    //       : "https://mis.twse.com.tw/stock/api/getCategory.jsp?ex=tse&i=01&_=1620578195652"
    //   }`
    // );
    // https://mis.twse.com.tw/stock/api/getCategory.jsp?ex=tse&i=01&_=1620578195652
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
