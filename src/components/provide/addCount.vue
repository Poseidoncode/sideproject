<template>
  <div>{{ count }}</div>
</template>

<script>
import { toRefs, inject, watch, computed } from "vue";
import index from "@/composition/provide/index";
export default {
  name: "addCount",
  setup() {
    const { state } = inject("index");
    // console.log("stateRef", stateRef);
    console.log("state", state);

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
