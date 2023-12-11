import axios from "axios";

function createAPI() {
  const api = axios.create({
    // baseURL: "https://camp2summits.com/camp2summits/api/v1",
    baseURL: "https://sherpa-tech.com/trekkingreplica/api/v1",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  return api;
}

export const apis = createAPI();
