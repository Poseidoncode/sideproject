import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Primevue from "primevue/config";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import OverlayPanel from "primevue/overlaypanel";
import RadioButton from "primevue/radiobutton";
import ProgressSpinner from "primevue/progressspinner";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(Primevue)
  .mount("#app");

app.component("Calendar", Calendar);
app.component("Button", Button);
app.component("InputSwitch", InputSwitch);
app.component("OverlayPanel", OverlayPanel);
app.component("RadioButton", RadioButton);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Checkbox", Checkbox);
app.component("Textarea", Textarea);
app.component("InputNumber", InputNumber);
