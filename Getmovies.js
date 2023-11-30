const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/configuration";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer cbdc9f84e92b03d99f1fdff697fa2ad7",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
