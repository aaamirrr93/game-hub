import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "875325d52a4c4419a862417a0d89c370",
  },
});
