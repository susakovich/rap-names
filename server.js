const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "50 cent": {
    age: 47,
    birthName: "Curtis James Jackson III",
    birthLocation: "Queens, New York, United States",
  },
  eminem: {
    age: 50,
    birthName: "Marshall Bruce Mathers III",
    birthLocation: "Saint Joseph, Missouri, United States",
  },
  "kendrick lamar": {
    age: 35,
    birthName: "Kendrick Lamar Duckworth",
    birthLocation: "Compton, California, United States",
  },
  Unknown: {
    age: "Unknown",
    birthName: "Unknown",
    birthLocation: "Unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["Unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
