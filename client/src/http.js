import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:2023/api/v1/checker",
  headers: {
    "Content-type": "application/json",
  },
});
