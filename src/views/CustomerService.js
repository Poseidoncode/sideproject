import axios from "axios";
import XLarge from "./customers-xlarge.json";

export default class CustomerService {
  getCustomersSmall() {
    return axios.get("data/customers-small.json").then((res) => res.data.data);
  }

  getCustomersMedium() {
    return axios.get("data/customers-medium.json").then((res) => res.data.data);
  }

  getCustomersLarge() {
    // console.log("XLarge", XLarge);
    return XLarge;
  }

  getCustomersXLarge() {
    return axios.get("data/customers-xlarge.json").then((res) => res.data.data);
  }

  getCustomers(params) {
    return axios
      .get("https://www.primefaces.org/data/customers", { params })
      .then((res) => res.data);
  }
}
