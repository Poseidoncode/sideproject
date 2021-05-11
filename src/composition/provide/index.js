import { reactive, computed, readonly } from "vue";

// 對應原本的 state
const stateRef = reactive({
  count: 0,
});

// 對應原本的 mutations
const setCount = (val) => {
  stateRef.count = val;
};

// 對應原本的 actions
const addCount = (val) => {
  let data = stateRef.count;
  data = data + 1;
  setCount(data);
};
