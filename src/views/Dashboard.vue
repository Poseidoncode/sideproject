<template>
  <div class="test">123</div>
  <addCount />
</template>

<script>
// @ is an alias to /src

import { provide } from "vue";
import addCount from "@/components/provide/addCount.vue";
import index from "@/composition/provide/index";

export default {
  name: "Provide",
  components: {
    addCount,
  },
  setup() {
    provide("index", index);
    console.log("index", index);
    index.addCount();
  },
};
</script>
