<template> </template>

<script>
import { toRefs, inject, watch, computed } from "vue";
export default {
  name: "addCount",
  setup() {
    const index = inject("index");

    const { triggerPopup } = map;
    const {
      state,
      setCurrCity,
      setCurrDistrict,
      setKeywords,
      setShowModal,
      setInfoBoxSid,
    } = mapStore;

    const keywordHighlight = (val) => {
      return val.replace(
        new RegExp(state.keywords, "g"),
        `<span class="highlight">${state.keywords}</span>`
      );
    };

    const openInfoBox = (sid) => {
      setShowModal(true);
      setInfoBoxSid(sid);
    };

    const currCity = computed({
      get() {
        return state.currCity;
      },
      set(value) {
        // 更換行政區回到第一頁
        setCurrCity(value);
      },
    });

    const currDistrict = computed({
      get() {
        return state.currDistrict;
      },
      set(value) {
        // 更換行政區回到第一頁
        setCurrDistrict(value);
      },
    });

    const currKeywords = computed({
      get() {
        return state.keywords;
      },
      set(value) {
        setKeywords(value);
      },
    });

    watch(
      () => state.districtList,
      (v) => {
        const [arr] = v;
        setCurrDistrict(arr.name);
      }
    );

    return {
      ...toRefs(state),
      currCity,
      currDistrict,
      currKeywords,
      triggerPopup,
      openInfoBox,
      keywordHighlight,
    };
  },
};
</script>

<style></style>
