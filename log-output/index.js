const crypto = require("crypto");
const express = require("express");

// Random string app
let randomStrings = [];

function createRandomString() {
  const randomString = crypto.randomUUID();
  randomStrings.push(randomString);
}

function getCurrentRandomStringWithTimestamp() {
  return `${new Date().toISOString()}: ${randomStrings.at(-1)}`;
}

createRandomString();
console.log(getCurrentRandomStringWithTimestamp());

setInterval(() => {
  createRandomString();
  console.log(getCurrentRandomStringWithTimestamp());
}, 5000);

// HTTP server
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(getCurrentRandomStringWithTimestamp());
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
